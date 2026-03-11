import { useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/351965604641?text=Olá%20Rui!%20Vi%20o%20teu%20perfil%20e%20quero%20saber%20como%20podes%20ajudar%20o%20meu%20negócio%20a%20vender%20mais.";

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
