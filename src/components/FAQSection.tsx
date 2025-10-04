import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é Gestão de Tráfego Pago e como pode ajudar o meu negócio?",
      answer: "A Gestão de Tráfego Pago consiste em criar, otimizar e gerir campanhas de anúncios online em plataformas como Google Ads e Meta Ads (Facebook e Instagram). O objetivo é direcionar visitantes qualificados para o teu website ou negócio, transformando cliques em clientes reais e vendas. Ajudo o teu negócio a alcançar um público maior, aumentar a visibilidade da marca e gerar um retorno direto sobre o investimento em publicidade."
    },
    {
      question: "Além da gestão de anúncios, que outros serviços ofereçes?",
      answer: "Para além da gestão de publicidade online (Meta Ads e Google Ads), consigo criar Photoshoots Digitais para criar conteúdo visual profissional que vende, otimização do Google My Business para dominar a tua área local, e Sugestão de Conteúdo para ajudar a criar uma estratégia de engagement e vendas nas tuas redes sociais."
    },
    {
      question: "Não percebo nada disso. É complicado?",
      answer: "Não precisas de perceber. É essa a vantagem. Eu trato de tudo. Tu focas-te no que sabes fazer: gerir o teu negócio."
    },
    {
      question: "Já me tramei com 'especialistas' antes...",
      answer: "Compreendo perfeitamente. Por isso é que começo com uma análise grátis. Primeiro provo que sei o que faço, mostro-te o plano elaborado para o teu momento atual, e só depois decides se queres avançar. Zero pressão."
    },
    {
      question: "Quanto tempo demora a ver resultados?",
      answer: "Embora os resultados possam variar, o meu foco é na rapidez e eficácia. As primeiras campanhas podem estar no ar em 24 horas e, geralmente, começamos a ver os primeiros resultados e dados significativos nas primeiras semanas. A otimização contínua garante que os resultados melhorem progressivamente ao longo do tempo."
    },
    {
      question: "Preciso de ter um grande orçamento para começar?",
      answer: "Não. Trabalho com orçamentos adaptados à realidade de pequenos e médios negócios. O mais importante é que cada euro investido seja estratégico e traga retorno. O meu objetivo é otimizar o teu investimento para que obtenhas o máximo de resultados, independentemente do tamanho do orçamento inicial."
    },
    {
      question: "Como posso começar?",
      answer: "É simples! Podes contactar-me diretamente pelo WhatsApp através do número +351 965 604 641 ou preenchendo o formulário. Garanto uma resposta em menos de 2H para WhatsApp e 24H para email (dias úteis) para que possamos começar a fazer o teu negócio crescer online o mais rápido possível."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que precisas de saber para começar a crescer
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
