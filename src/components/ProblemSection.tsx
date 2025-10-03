import { XCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      title: "Gastas dinheiro mas não vês resultados?",
      description: "Os teus anúncios têm cliques mas zero vendas. O budget evapora-se e o negócio continua na mesma."
    },
    {
      title: "Não sabes se os anúncios estão a funcionar?",
      description: "Números, métricas, dashboards... mas não fazes ideia se estás no caminho certo ou a queimar dinheiro."
    },
    {
      title: "Tentaste fazer sozinho e foi um desastre?",
      description: "Horas perdidas a tentar perceber Meta Ads, Google Ads, targeting... e no final: frustração total."
    },
    {
      title: "A concorrência está sempre à frente?",
      description: "Vês os teus competidores a crescer enquanto tu ficas para trás, sem saber o que eles fazem de diferente."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Se isto te soa familiar, tens um problema.{" "}
            <span className="text-primary">E não és o único.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A maioria dos pequenos negócios em Portugal está a desperdiçar milhares de euros em anúncios que não funcionam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <XCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-secondary text-white rounded-2xl p-8 max-w-3xl">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              A Boa Notícia?
            </p>
            <p className="text-xl text-gray-300">
              Não precisas de ser um guru do marketing digital. Precisas de alguém que saiba o que está a fazer. 
              E que <span className="text-primary font-semibold">transforme cliques em dinheiro na tua conta</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
