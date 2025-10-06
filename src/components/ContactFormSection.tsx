import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactFormSection = () => {
  const mailtoLink = "mailto:clientes@ruilorytrafego.com?subject=Quero%20saber%20mais%20sobre%20gest%C3%A3o%20de%20anúncios";

  return (
    <section id="contacto" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Preferes Email?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Envia-me uma Mensagem
            </h3>
            <p className="text-muted-foreground">
              Resposta em 24h (dias úteis)
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 border border-border">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Clica no botão abaixo para abrir o teu cliente de email
              </p>
              <Button 
                variant="outline" 
                size="default"
                className="w-full md:w-auto group"
                asChild
              >
                <a href={mailtoLink}>
                  Enviar Email
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                ou envia diretamente para: <strong>clientes@ruilorytrafego.com</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
