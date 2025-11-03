import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Search, Mail, Rocket } from "lucide-react";

const FreeAuditSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    facebook: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-audit-request", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "✅ Pedido recebido!",
        description: "Vou analisar tudo com atenção e entro em contacto contigo nas próximas 48h.",
      });

      setFormData({
        name: "",
        instagram: "",
        facebook: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting audit request:", error);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tenta novamente ou contacta-me diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Scroll Stopper */}
          <div className="text-center mb-12 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl">✋</span>
              </div>
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Antes de avançares... deixa-me mostrar-te exatamente como funciona
              </p>
            </div>
            <p className="text-sm text-muted-foreground">(sem compromisso, sem pressão)</p>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Como Funciona a Análise Gratuita?
            </h2>
            <p className="text-lg text-muted-foreground">
              Simples, direto e sem letras pequenas
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Partilhas os Dados</h3>
              <p className="text-muted-foreground">
                Preenches um formulário rápido com informações do teu negócio - Instagram, Facebook, email. Nada de complicado.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Eu Analiso Tudo</h3>
              <p className="text-muted-foreground">
                Vou ao pormenor: página, anúncios, posicionamento. Avalio o que está a funcionar e o que pode melhorar.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Recebes a Análise</h3>
              <p className="text-muted-foreground">
                Dentro de 48h, envio-te um email detalhado (ou vídeo) com a minha análise honesta e o que faria no teu lugar.
              </p>
            </div>
          </div>

          {/* Trust Box */}
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-12">
            <p className="text-foreground leading-relaxed">
              <span className="text-2xl mr-2">⚡</span>
              <strong>Importante:</strong> Esta análise não tem qualquer custo escondido - é uma consulta completamente sem custo. Vou explicar-te o que encontrei e o que considero essencial para o teu negócio crescer online. Depois, a decisão é 100% tua - sem pressão, sem chamadas agressivas. Como numa conversa de café entre profissionais.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-xl shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  O Teu Nome *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="João Silva"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                  Instagram do Negócio *
                </label>
                <Input
                  id="instagram"
                  type="text"
                  required
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="@seunegocio"
                />
              </div>

              <div>
                <label htmlFor="facebook" className="block text-sm font-medium mb-2">
                  Facebook do Negócio *
                </label>
                <Input
                  id="facebook"
                  type="text"
                  required
                  value={formData.facebook}
                  onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                  placeholder="facebook.com/seunegocio"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "A enviar..."
                ) : (
                  <>
                    Quero a Minha Análise Gratuita
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAuditSection;
