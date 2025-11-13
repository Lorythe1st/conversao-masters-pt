import { Button } from "@/components/ui/button";
import ruiProfile from "@/assets/rui-profile.jpg";
import { CheckCircle2 } from "lucide-react";
const AboutSection = () => {
  const whatsappNumber = "351965604641";
  const whatsappMessage = encodeURIComponent("Olá Rui! Quero marcar uma conversa contigo.");
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative z-10">
              <img src={ruiProfile} alt="Rui Lory - Especialista em Gestão de Tráfego Pago" className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/20 rounded-2xl -z-0"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem é o{" "}
              <span className="text-primary">Rui Lory?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não sou guru. Não prometo milagres. Sou gestor de tráfego pago focado em resultados reais para negócios locais em Portugal.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Enquanto outros vendem sonhos, eu construo <strong className="text-foreground">campanhas que convertem</strong>. 
              Simples assim.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Experiência real</strong> em gestão de anúncios para diversos setores
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Foco em resultados</strong> - cada euro investido tem que valer a pena
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Comunicação direta</strong> - sem termos técnicos desnecessários
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Dedicação total</strong> ao sucesso dos meus clientes
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="cta" size="lg" className="w-full text-xl font-bold py-6" asChild>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  Vamos Trabalhar Juntos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;