import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              ← Voltar ao Início
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Política de Cookies</h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-PT")}
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">O que são Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo 
              (computador, tablet ou telemóvel) quando visita um website. Os cookies são 
              amplamente utilizados para fazer com que os websites funcionem de forma mais 
              eficiente e para fornecer informações aos proprietários do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Como Utilizamos Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies para os seguintes propósitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do website</li>
              <li><strong>Cookies de Preferências:</strong> Permitem que o site se lembre das suas escolhas</li>
              <li><strong>Cookies de Análise:</strong> Ajudam-nos a entender como os visitantes interagem com o site</li>
              <li><strong>Cookies de Marketing:</strong> Utilizados para apresentar publicidade relevante</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Cookies Estritamente Necessários</h3>
                <p className="text-sm text-muted-foreground">
                  Estes cookies são essenciais para o funcionamento do website e não podem 
                  ser desativados. Incluem cookies que permitem lembrar as suas preferências 
                  de privacidade.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Cookies de Desempenho</h3>
                <p className="text-sm text-muted-foreground">
                  Estes cookies permitem-nos contar visitas e fontes de tráfego para podermos 
                  medir e melhorar o desempenho do nosso site. Ajudam-nos a saber quais as 
                  páginas mais e menos populares.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Cookies de Funcionalidade</h3>
                <p className="text-sm text-muted-foreground">
                  Estes cookies permitem que o website forneça funcionalidades e personalização 
                  melhoradas. Podem ser definidos por nós ou por fornecedores terceiros cujos 
                  serviços adicionámos às nossas páginas.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Cookies de Segmentação</h3>
                <p className="text-sm text-muted-foreground">
                  Estes cookies podem ser definidos através do nosso site pelos nossos parceiros 
                  de publicidade. Podem ser usados por essas empresas para construir um perfil 
                  dos seus interesses e mostrar-lhe anúncios relevantes noutros sites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies de Terceiros</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Além dos nossos próprios cookies, também utilizamos cookies de terceiros para 
              os seguintes fins:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Google Analytics - Para análise de tráfego e comportamento dos utilizadores</li>
              <li>Meta Pixel - Para análise de conversões e publicidade direcionada</li>
              <li>Redes Sociais - Para partilha de conteúdo e integração com redes sociais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Gestão de Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos os 
              cookies que já estão no seu dispositivo e pode configurar a maioria dos navegadores 
              para impedir que sejam colocados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No entanto, se o fizer, poderá ter que ajustar manualmente algumas preferências 
              sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Para saber como gerir cookies no seu navegador:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/pt-PT/kb/ativar-desativar-cookies-websites-utilizam-monitorizar-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Consentimento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao utilizar o nosso website, consente a utilização de cookies de acordo com 
              esta Política de Cookies. Se não concordar com a utilização de cookies, deve 
              ajustar as configurações do seu navegador em conformidade ou não utilizar o 
              nosso website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Alterações a Esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que 
              consulte esta página regularmente para se manter informado sobre como utilizamos 
              cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se tiver questões sobre esta Política de Cookies, pode contactar-nos através de:
            </p>
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:clientes@ruilorytrafego.com" className="text-primary hover:underline">
                  clientes@ruilorytrafego.com
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Instagram:</strong>{" "}
                <a 
                  href="https://instagram.com/ruilory.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ruilory.pt
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
