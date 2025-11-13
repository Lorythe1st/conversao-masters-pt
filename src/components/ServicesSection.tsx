import { Target, MapPin, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import metaAdsImage from "@/assets/meta-ads-graph.png";
import googleMyBusinessImage from "@/assets/google-my-business.jpg";
import ruiProfile from "@/assets/rui-profile.jpg";
const ServicesSection = () => {
  const services = [{
    icon: Target,
    title: "Gestão de Publicidade Online",
    description: "Meta Ads e Google Ads otimizados para trazer clientes ao teu negócio. Cada euro conta, cada campanha é estratégica.",
    features: ["Campanhas focadas em resultados reais", "Otimização contínua de performance", "Relatórios claros e transparentes", "Investimento bem aplicado"],
    image: metaAdsImage
  }, {
    useProfileImage: true,
    title: "Photoshoots Digitais",
    description: "Conteúdo visual profissional que vende. Porque uma imagem vale mais que mil palavras (e muito mais vendas).",
    features: ["Fotos profissionais para redes sociais", "Conteúdo para publicidade de alta conversão", "Book fotográfico completo", "Identidade visual consistente"]
  }, {
    icon: MapPin,
    title: "Google My Business",
    description: "Domina a tua área local. Aparece quando os clientes te procuram (e antes da concorrência).",
    features: ["Otimização completa do perfil", "Gestão de reviews e reputação", "Posts estratégicos regulares", "Maior visibilidade local"],
    image: googleMyBusinessImage
  }, {
    icon: PenTool,
    title: "Sugestão de Conteúdo",
    description: "Não sabes o que publicar? Eu ajudo. Estratégia de conteúdo que gera engagement e vendas.",
    features: ["Calendário de conteúdo personalizado", "Copy persuasivo para posts", "Ideias criativas alinhadas ao negócio", "Aumento de engagement orgânico"]
  }];
  const whatsappNumber = "351965604641";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre os teus serviços de gestão de tráfego.");
  return <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como Vou Fazer o Teu Negócio{" "}
            <span className="text-gradient">Crescer Online</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Serviços completos para negócios que querem resultados reais. Sem enrolação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
          return <div key={index} className="bg-gradient-to-br from-white to-muted p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50">
                {service.useProfileImage ? <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={ruiProfile} alt="Rui Lory - Photoshoots Digitais" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div> : <div className="flex items-start gap-4 mb-6">
                    {service.icon && <div className="p-3 bg-primary/10 rounded-xl">
                        {(() => {
                  const Icon = service.icon;
                  return <Icon className="w-8 h-8 text-primary" />;
                })()}
                      </div>}
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>}

                {service.image && <div className="mb-6 rounded-xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  </div>}

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>)}
                </ul>
              </div>;
        })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-12 w-full md:w-auto" asChild>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              Vamos Conversar no WhatsApp
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Resposta garantida em menos de 2 horas (dias úteis)
          </p>
        </div>
      </div>
    </section>;
};
export default ServicesSection;