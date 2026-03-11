import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.link/adngwe";

const WhatsApp = () => {
  useEffect(() => {
    window.location.href = WHATSAPP_URL;
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground text-lg animate-pulse">
        A redirecionar para o WhatsApp...
      </p>
    </div>
  );
};

export default WhatsApp;
