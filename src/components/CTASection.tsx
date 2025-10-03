import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Zap } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "351965604641";
  const whatsappMessage = encodeURIComponent("Olá Rui! Quero começar a transformar o meu tráfego em vendas AGORA!");

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary/30 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ainda Estás a Pensar?{" "}
            <span className="text-primary">Os Teus Concorrentes Não.</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Cada dia que passa é dinheiro que deixas em cima da mesa. Clientes que vão para a concorrência. 
            Vendas que poderiam ser tuas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Urgência Real</h3>
              <p className="text-gray-300">
                O mercado não espera. Quanto mais cedo começares, mais rápido vês resultados.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Foco em Resultados</h3>
              <p className="text-gray-300">
                Trabalho orientado para vendas reais. Se não funcionar, ajusto até funcionar.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Início Rápido</h3>
              <p className="text-gray-300">
                Em 24h podes ter as primeiras campanhas no ar. Simples e eficaz.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-2xl md:text-3xl font-bold mb-6">
              Não Percas Mais Tempo. Nem Mais Dinheiro.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Contacta-me AGORA pelo WhatsApp e vamos fazer o teu negócio crescer online.
            </p>

            <Button 
              variant="hero" 
              size="lg"
              className="text-xl px-12 py-6 h-auto"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                Começar Agora no WhatsApp
              </a>
            </Button>

            <p className="text-sm text-gray-400 mt-6">
              📱 +351 965 604 641 | ✉️ Clientes@ruilorytrafego.com
            </p>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://instagram.com/ruilory.pt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              @ruilory.pt
            </a>
            <span className="text-gray-600">|</span>
            <a href={`mailto:Clientes@ruilorytrafego.com`} className="text-gray-300 hover:text-primary transition-colors">
              Clientes@ruilorytrafego.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
