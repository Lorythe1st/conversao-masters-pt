import { XCircle } from "lucide-react";
const ProblemSection = () => {
  const problems = [{
    title: "Gastas dinheiro mas não vês resultados?",
    description: "Investes em divulgação - outdoors, flyers, redes sociais - mas as vendas não aparecem. O budget desaparece e o negócio continua na mesma."
  }, {
    title: "Não sabes se a tua publicidade está a funcionar?",
    description: "Gastas dinheiro em publicidade mas não fazes ideia se está a funcionar ou se estás só a desperdiçar o teu orçamento."
  }, {
    title: "Já promoveste posts no Instagram mas não viste resultados?",
    description: "Carregaste no botão de 'Promover', gastaste 50€, 100€... e só recebeste alguns gostos. Zero clientes, zero vendas."
  }, {
    title: "A concorrência está sempre à frente?",
    description: "Vês os teus competidores a crescer enquanto tu ficas para trás, sem saber o que eles fazem de diferente."
  }];
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Se isto te soa familiar, tens um problema.{" "}
            <span className="text-primary">E não és o único.</span>
          </h2>
          <p className="text-xl text-muted-foreground">A maioria dos negócios em Portugal está a desperdiçar milhares de euros em publicidade que não funciona .</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
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
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-secondary text-white rounded-2xl p-8 max-w-3xl">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              A Boa Notícia?
            </p>
            <p className="text-xl text-gray-300">
              Não precisas de ser especialista em publicidade online. Precisas de alguém que saiba o que está a fazer. 
              E que <span className="text-primary font-semibold">transforme investimento em vendas reais</span>.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;