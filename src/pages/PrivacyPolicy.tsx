const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <p className="text-sm text-muted-foreground mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introdução</h2>
            <p>
              A presente Política de Privacidade explica como Rui Lory ("nós", "nosso" ou "o prestador de serviços") 
              recolhe, utiliza, armazena e protege os dados pessoais dos utilizadores do website ruilorytrafego.com 
              ("Website"), em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) - Regulamento (UE) 2016/679 
              e a legislação portuguesa aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Responsável pelo Tratamento de Dados</h2>
            <p>
              <strong>Nome:</strong> Rui Lory<br />
              <strong>Email:</strong> clientes@ruilorytrafego.com<br />
              <strong>Website:</strong> ruilorytrafego.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Dados Pessoais Recolhidos</h2>
            <p>Recolhemos os seguintes dados pessoais quando utiliza os nossos serviços de contacto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nome completo</strong></li>
              <li><strong>Endereço de email</strong></li>
              <li><strong>Mensagem/conteúdo da comunicação</strong></li>
              <li><strong>Dados de contacto via WhatsApp</strong> (número de telefone, quando aplicável)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Finalidade do Tratamento de Dados</h2>
            <p>Os dados pessoais recolhidos são utilizados exclusivamente para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a pedidos de informação e contacto</li>
              <li>Prestação de serviços de gestão de tráfego pago e marketing digital</li>
              <li>Comunicação relacionada com os serviços solicitados</li>
              <li>Análise e melhoria dos nossos serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Base Legal para o Tratamento</h2>
            <p>O tratamento dos seus dados pessoais baseia-se em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimento:</strong> Ao submeter os seus dados através do formulário de contacto ou WhatsApp, 
              está a dar o seu consentimento expresso para o tratamento dos mesmos</li>
              <li><strong>Execução de contrato:</strong> Quando necessário para a prestação dos serviços solicitados</li>
              <li><strong>Interesse legítimo:</strong> Para responder a questões e melhorar os nossos serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Partilha de Dados com Terceiros</h2>
            <p>
              Os seus dados pessoais não são vendidos, alugados ou partilhados com terceiros para fins comerciais. 
              Poderão ser partilhados apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com prestadores de serviços essenciais (ex: serviços de email, plataformas de comunicação como WhatsApp) 
              que atuam como subcontratantes e apenas para fins de prestação de serviço</li>
              <li>Quando exigido por lei ou por ordem de autoridade competente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Prazo de Conservação dos Dados</h2>
            <p>
              Os dados pessoais são conservados apenas pelo período necessário para as finalidades para as quais foram recolhidos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados de contacto: até 3 anos após o último contacto ou até que o titular solicite a sua eliminação</li>
              <li>Dados relacionados com a prestação de serviços: durante a vigência do contrato e até 5 anos após 
              o seu término, para cumprimento de obrigações legais e fiscais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Direitos dos Titulares dos Dados</h2>
            <p>Em conformidade com o RGPD, tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Direito de acesso:</strong> Pode solicitar informação sobre os dados pessoais que detemos sobre si</li>
              <li><strong>Direito de retificação:</strong> Pode solicitar a correção de dados inexatos ou incompletos</li>
              <li><strong>Direito ao apagamento:</strong> Pode solicitar a eliminação dos seus dados pessoais</li>
              <li><strong>Direito de limitação do tratamento:</strong> Pode solicitar a limitação do tratamento em 
              determinadas circunstâncias</li>
              <li><strong>Direito de portabilidade:</strong> Pode solicitar a transferência dos seus dados para outro 
              responsável pelo tratamento</li>
              <li><strong>Direito de oposição:</strong> Pode opor-se ao tratamento dos seus dados pessoais</li>
              <li><strong>Direito de retirar o consentimento:</strong> Pode retirar o consentimento a qualquer momento, 
              sem comprometer a licitude do tratamento efetuado com base no consentimento previamente dado</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer um destes direitos, contacte-nos através do email: <strong>clientes@ruilorytrafego.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra 
              acessos não autorizados, perda, destruição ou alteração. No entanto, nenhum método de transmissão 
              pela Internet ou armazenamento eletrónico é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Cookies</h2>
            <p>
              Este website pode utilizar cookies para melhorar a experiência do utilizador. Pode configurar o seu 
              navegador para recusar cookies, embora isso possa afetar a funcionalidade do website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Alterações à Política de Privacidade</h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que 
              consulte esta página regularmente para se manter informado sobre como protegemos os seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Reclamações</h2>
            <p>
              Se considerar que os seus direitos não estão a ser respeitados, tem o direito de apresentar uma 
              reclamação junto da autoridade de controlo competente:
            </p>
            <p className="mt-2">
              <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong><br />
              Website: <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnpd.pt</a><br />
              Email: geral@cnpd.pt<br />
              Telefone: +351 213 928 400
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Contacto</h2>
            <p>
              Para qualquer questão relacionada com esta Política de Privacidade ou com o tratamento dos seus 
              dados pessoais, contacte-nos através de:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> clientes@ruilorytrafego.com<br />
              <strong>WhatsApp:</strong> +351 965 604 641
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a 
            href="/" 
            className="text-primary hover:underline font-medium"
          >
            ← Voltar à página inicial
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
