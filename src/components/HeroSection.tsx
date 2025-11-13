import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/rui-1.png";

const HeroSection = () => {
  const whatsappNumber = "351965604641";
  const whatsappMessage = encodeURIComponent("Olá Rui! Vi o teu site e quero saber mais sobre como aumentar as minhas vendas online.");
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 text-primary" />
              <span>Gestão de Anúncios | Negócios Locais</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Para de Desperdiçar Dinheiro em{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Publicidade que Não Funciona
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Transformo o teu negócio local em <strong className="text-white">ÍMAN de clientes</strong> usando Google Ads e Meta Ads de maneira que realmente convertem.
              <br /><br />
              Sem truques. Sem promessas vazias. <strong className="text-primary">Resultados que podes ver em 48h</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
                asChild
              >
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  Quero Mais Clientes Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg font-bold"
                asChild
              >
                <a href="#como-funciona">
                  Ver Como Funciona
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 sm:max-w-xl">
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">Foco</div>
                <div className="text-sm text-gray-400 mt-1">Em Resultados</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">48h</div>
                <div className="text-sm text-gray-400 mt-1">Para Começar</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-400 mt-1">Dedicação</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="Rui Lory - Especialista em Gestão de Anúncios Pagos" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 right-0 bg-primary rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-white font-semibold text-lg">
                  💬 "Resultados reais começam com estratégia sólida."
                </p>
                <p className="text-white/80 text-sm mt-2">Rui Lory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
