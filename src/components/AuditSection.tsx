import { Button } from "@/components/ui/button";
import { ArrowRight, Video, CheckCircle2 } from "lucide-react";

const AuditSection = () => {
  const whatsappNumber = "351965604641";
  const whatsappMessage = encodeURIComponent("Olá Rui! Quero a minha auditoria grátis de marketing!");
  
  return (
    <section className="relative py-20 bg-accent overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full p-6">
              <Video className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary mb-6 leading-tight">
            Não Sabes Porque é que os Teus<br />
            Anúncios Não Funcionam?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-center text-secondary/80 mb-12 font-medium">
            Vou mostrar-te <strong className="text-secondary">EXACTAMENTE</strong> o que está errado<br />
            (e como corrigir) em menos de 15 minutos.
          </p>

          {/* Video Mockup */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl border-4 border-secondary/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <div className="bg-primary/90 backdrop-blur-sm rounded-full p-8 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-xl">
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent ml-2"></div>
              </div>
            </div>
            {/* Decorative elements around video */}
            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl px-4 py-2 font-bold shadow-lg">
              10-15min
            </div>
          </div>

          {/* Benefits List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 shadow-xl border border-secondary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">
              O QUE VOU FAZER POR TI (GRÁTIS):
            </h3>
            
            <div className="space-y-4">
              {[
                "Analiso a tua presença online actual",
                "Mostro 3 oportunidades que estás a desperdiçar",
                "Dou-te 1 ação que podes fazer HOJE",
                "Tudo em vídeo personalizado (10-15min)"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-lg md:text-xl text-secondary/90 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency Text */}
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              TUDO EM 48H. COMPLETAMENTE GRÁTIS.
            </p>
            <p className="text-lg text-secondary/70">
              (Sem call de vendas. Sem pressão.)
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              variant="cta" 
              size="lg"
              className="group text-xl px-12 py-8 h-auto shadow-2xl hover:shadow-[0_20px_70px_-10px_hsl(var(--primary)/0.6)]"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <ArrowRight className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-transform" />
                QUERO A MINHA AUDITORIA GRÁTIS
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;