import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import CookieConsent from "@/components/CookieConsent";
import "@/landing.css";
import lpHero from "@/assets/lp-hero.jpg";
import lpSobre from "@/assets/lp-sobre.jpg";
import lpFoto1 from "@/assets/lp-foto1.jpg";
import lpFoto2 from "@/assets/lp-foto2.jpg";
import lpFoto3 from "@/assets/lp-foto3.jpg";

const RECAPTCHA_SITE_KEY = "6LfskJotAAAAAHMomB3yPM_RRMDgHMWHSCry_uN4";

type Grecaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, opts: { action: string }) => Promise<string>;
};

const getRecaptchaToken = (): Promise<string | null> =>
  new Promise((resolve) => {
    const g = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;
    if (!g) return resolve(null);
    const timeout = setTimeout(() => resolve(null), 8000);
    g.ready(() => {
      g.execute(RECAPTCHA_SITE_KEY, { action: "audit_request" })
        .then((t) => { clearTimeout(timeout); resolve(t); })
        .catch(() => { clearTimeout(timeout); resolve(null); });
    });
  });

const Index = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const honeypot = String(f.get("website") ?? "");
    if (honeypot.trim() !== "") return;
    setStatus("sending");
    try {
      const recaptchaToken = await getRecaptchaToken();
      const { data, error } = await supabase.functions.invoke("send-audit-request", {
        body: {
          name: String(f.get("nome") ?? ""),
          email: String(f.get("email") ?? ""),
          instagram: String(f.get("instagram") ?? ""),
          facebook: "-",
          recaptchaToken,
          honeypot,
        },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
      setStatus("err");
    }
  };

  return (
    <>
      <div className="lp">
<header className="hero"><div className="w hg">
  <div>
    <p className="k">Anúncios, copy e conteúdo</p>
    <h1>Tens um bom negócio. <span className="y">Só tu é que sabes.</span></h1>
    <p className="sf">Eu trato disso: anúncios, copy e conteúdo. Uma pessoa. Zero bullshit.</p>
    <div className="row">
      <a className="btn b1" href="https://wa.me/351965604641">Conversa de café? WhatsApp</a>
      <a className="btn b2" href="https://ig.me/m/ruilory.pt">Ou manda DM</a>
    </div>
    <p className="small">Sem compromisso. Respondo assim que puder.</p>
    <div className="rule" aria-hidden="true"></div>
  </div>
  <figure className="ph"><img src={lpHero} alt="Rui Lory" /></figure>
</div></header>

<main>
<section className="pb"><div className="w">
  <h2>Um bom negócio sem montra é uma loja com as luzes apagadas.</h2>
  <div className="pr">
    <div><h3>Pagas anúncios e não sabes se funcionam.</h3><p>Alguém te mostrou um relatório cheio de siglas e continuas sem saber se valeu a pena.</p></div>
    <div><h3>Carregaste em “Promover”.</h3><p>Gastaste, ninguém ligou. Boostar um post não é fazer publicidade.</p></div>
    <div><h3>O teu concorrente é pior e tem mais clientes.</h3><p>Não é sorte. Ele aparece, tu não.</p></div>
  </div>
  <p className="an" style={{fontSize: "2.4rem", color: "var(--t)"}}>A boa notícia: isto resolve-se.</p>
</div></section>

<section><div className="w">
  <h2>Três coisas que costumam ser três fornecedores. Aqui é uma pessoa.</h2>
  <p>Dá a ideia, escreve o texto e cria o post na mesma cabeça. Menos reuniões, menos telefone estragado.</p>
  <div className="t3" style={{marginTop: "2rem"}}>
    <div><h3>Anúncios</h3><p>Meta e Google. Chegam a quem já anda à procura do que vendes. Sei explicar-te para onde vai cada euro.</p></div>
    <div><h3>Copy</h3><p>O texto que faz alguém parar de deslizar. Na tua voz, não na de um robô de marketing. Explico já a seguir.</p></div>
    <div><h3>Conteúdo</h3><p>Ideias e posts prontos a publicar, do plano à imagem.</p></div>
  </div>
  <div className="ex">
    <p className="small">Extras: Perfil de Empresa no Google, a tua segunda montra. Photoshoots digitais para o teu negócio. Pergunta como.</p>
    <div className="fots">
      <figure className="ph"><img src={lpFoto1} alt="Exemplo de photoshoot digital" /></figure>
      <figure className="ph"><img src={lpFoto2} alt="Exemplo de photoshoot digital" /></figure>
      <figure className="ph"><img src={lpFoto3} alt="Exemplo de photoshoot digital" /></figure>
    </div>
  </div>
</div></section>

<section className="cp"><div className="w">
  <p className="k">Antes de continuares</p>
  <h2>Copy? Isso come-se?</h2>
  <p>Não. Mas ajuda a pôr comida na mesa.</p><br />
  <p>Copy é escrever para alguém <strong>fazer alguma coisa</strong>: ligar, mandar mensagem, comprar. Não é escrever bonito. Ninguém paga a um poema para aparecer no Instagram.</p><br />
  <p>É o vendedor que trabalha 24 horas dentro do teu anúncio, do teu post e do teu site. Não pede aumento, não falta e não vai de férias em agosto. Sem ele, tens uma montra linda com a porta trancada.</p>
  <div className="cmp">
    <s>“Somos uma empresa de canalização com 20 anos de experiência de excelência e dedicação ao cliente.”</s>
    <mark>“Cano rebentado às 22h? Estou aí hoje.”</mark>
    <p>Mesmo canalizador. Um deles dá sono. O outro faz-te pegar no telefone.</p>
  </div>
  <p className="rem">Se o teu texto podia ser de qualquer concorrente, não é copy. É enchimento.</p>
</div></section>

<section><div className="w">
  <h2>Como trabalhamos</h2>
  <div className="ps">
    <div><span className="an">1</span><h3>Falamos</h3><p>Digo-te o que vejo no teu perfil e o que faria primeiro.</p></div>
    <div><span className="an">2</span><h3>Escolhemos</h3><p>Só o que faz sentido para o teu negócio e o teu orçamento. Sem pacotes à força.</p></div>
    <div><span className="an">3</span><h3>Faço</h3><p>Crio, publico e ajusto. Tu dizes-me o que viste, eu digo-te o que mudou.</p></div>
  </div>
</div></section>

<section style={{paddingTop: "0"}}><div className="w">
  <h2 className="y">Para quem é (e para quem não é)</h2>
  <div className="pq">
    <div className="sim"><h3 style={{color: "var(--t)"}}>É para ti se</h3><ul><li>Tens um serviço bom e ninguém o vê.</li><li>Queres alguém que trate de tudo.</li><li>Aceitas que anúncios precisam de tempo para afinar.</li></ul></div>
    <div className="nao"><h3>Não é para ti se</h3><ul><li>Queres milagres em 48 horas.</li><li>Só procuras o preço mais baixo.</li><li>Precisas de uma agência com vinte pessoas.</li></ul></div>
  </div>
</div></section>

<section style={{paddingTop: "0"}}><div className="w sb">
  <figure className="ph"><img src={lpSobre} alt="Rui Lory" /></figure>
  <div>
    <h2>Quem é o Rui</h2>
    <p>Sou o Rui Lory. Faço anúncios, copy e conteúdo para negócios locais e prestadores de serviços. Sozinho, de propósito: falas comigo do princípio ao fim.</p><br />
    <p>Não sou guru nem vendo milagres. Vendo trabalho bem feito e conversa direta.</p>
    <ul><li>Falas diretamente comigo.</li><li>Explico sem siglas.</li><li>Só te proponho o que faz sentido.</li></ul>
  </div>
</div></section>

<section style={{paddingTop: "0"}}><div className="w">
  <h2>Perguntas frequentes</h2>
  <details><summary>Preciso de um grande orçamento?</summary><p>Não. Começa-se pequeno e cresce-se com o que se vê a funcionar. Digo-te com franqueza quanto faz sentido para o teu caso.</p></details>
  <details><summary>Quanto tempo até ver resultados?</summary><p>Depende do negócio e do orçamento. Os anúncios precisam de uns dias para aprender, e quem promete resultados em 48 horas está a mentir-te.</p></details>
  <details><summary>Não percebo nada disto. É complicado?</summary><p>Não precisas de perceber. Explico em português, não em siglas.</p></details>
  <details><summary>Para que negócios trabalhas?</summary><p>Negócios locais e prestadores de serviços.</p></details>
  <details><summary>Como começamos?</summary><p>Com uma mensagem. O resto fala-se em conversa.</p></details>
</div></section>

<section className="cta" id="contacto"><div className="w">
  <h2>Conversa de café?</h2>
  <p>Conta-me o teu negócio. Eu digo-te o que faria. Sem compromisso, sem pressão.</p>
  <div className="row">
    <a className="btn b1" href="https://wa.me/351965604641">WhatsApp</a>
    <a className="btn b2" href="https://ig.me/m/ruilory.pt">DM no Instagram</a>
  </div>
  <form onSubmit={onSubmit}>
    <p className="small">Prefere escrever? Deixa aqui e eu respondo.</p>
    <div><label htmlFor="n">Nome</label><input id="n" name="nome" required autoComplete="name" /></div>
    <div><label htmlFor="e">Email</label><input id="e" name="email" type="email" required autoComplete="email" /></div>
    <div><label htmlFor="i">Instagram ou site do teu negócio</label><input id="i" name="instagram" required /></div>
    <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
    <button className="btn b1" type="submit" disabled={status === "sending"}>{status === "sending" ? "A enviar…" : "Enviar mensagem"}</button>
    {status === "ok" && <p role="status">Recebido. Falo contigo em breve.</p>}
    {status === "err" && <p role="alert">Não deu para enviar. Tenta pelo WhatsApp acima.</p>}
  </form>
</div></section>
</main>

<footer><div className="w"><span>© 2026 Rui Lory</span><a href="https://instagram.com/ruilory.pt">@ruilory.pt</a><Link to="/politica-privacidade">Privacidade</Link><Link to="/politica-cookies">Cookies</Link></div></footer>
      </div>
      <CookieConsent />
    </>
  );
};

export default Index;
