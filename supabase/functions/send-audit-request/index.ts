import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AuditRequest {
  name: string;
  instagram: string;
  facebook: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Initialize Supabase client with service role for database operations
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

  try {
    const { name, instagram, facebook, email }: AuditRequest = await req.json();

    console.log("Saving audit request to database for:", name);

    // Save to database FIRST (even if email fails, we have the lead)
    const { data: savedRequest, error: dbError } = await supabase
      .from("audit_requests")
      .insert({
        name,
        instagram,
        facebook,
        email,
        email_sent: false,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      // Continue anyway - try to send email even if DB fails
    } else {
      console.log("Lead saved to database:", savedRequest.id);
    }

    console.log("Sending audit request email for:", name);

    const timestamp = new Date().toLocaleString('pt-PT', { 
      timeZone: 'Europe/Lisbon',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const emailHtml = `
      <h2>Nova solicitação recebida:</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Instagram:</strong> ${instagram}</p>
      <p><strong>Facebook:</strong> ${facebook}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Data/Hora:</strong> ${timestamp}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Análises Gratuitas <onboarding@resend.dev>",
        to: ["clientes@ruilorytrafego.com"],
        subject: `Nova Solicitação de Análise Gratuita - ${name}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    console.log("Email sent successfully:", data);

    // Update database to mark email as sent
    if (savedRequest?.id) {
      await supabase
        .from("audit_requests")
        .update({ email_sent: true })
        .eq("id", savedRequest.id);
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-audit-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
