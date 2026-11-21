import { useEffect, useState } from "react";
import "./App.css";

const WHATSAPP = "244923030010";
const TELEFONE = "923 030 010";
const PLATAFORMA = "https://teacher-pedro-react.vercel.app";
const CATALOGO = "https://teacher-pedro-cursos.vercel.app";

const linkWhatsApp = (mensagem) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

const niveis = [
  ["A1", "Iniciante"],
  ["A2", "Elementar"],
  ["B1", "Intermédio"],
  ["B2", "Intermédio alto"],
  ["C1", "Avançado"],
  ["C2", "Proficiente"],
];

const cursos = [
  {
    titulo: "Iniciante (A1–A2)",
    texto: "Vocabulário essencial, frases do dia a dia e pronúncia desde o início.",
  },
  {
    titulo: "Intermédio (B1–B2)",
    texto: "Conversar com mais fluência, compreender textos e áudios e escrever com segurança.",
  },
  {
    titulo: "Avançado (C1–C2)",
    texto: "Precisão, vocabulário rico e comunicação profissional e académica.",
  },
];

const materiais = [
  ["Gerador de aulas", "Gera aulas de inglês por nível e tema, com descarga em PDF."],
  ["Treino de Leitura", "App web de treino de leitura em voz alta, com correção."],
  ["Ditado automático", "Ditado com voz em português, francês e inglês."],
  ["Exercícios para a 4.ª classe", "Inglês, Matemática e Português em formato de exercícios."],
  ["Ebooks e cadernos", "Materiais por nível, de A1 a C2, para estudar com ou sem aula."],
];

const competencias = [
  "Inglês A1–C2", "Quadro CEFR", "Conversação", "Pronúncia",
  "Leitura e escrita", "Planos de aula", "Criação de materiais", "Formação Maple Bear",
];

const menu = [
  ["sobre", "Sobre"],
  ["cursos", "Cursos"],
  ["plataforma", "Plataforma"],
  ["materiais", "Materiais"],
  ["competencias", "Competências"],
  ["contacto", "Contacto"],
];

export default function App() {
  const [tema, setTema] = useState(() => {
    try {
      const guardado = localStorage.getItem("tema");
      if (guardado) return guardado;
    } catch {
      /* localStorage indisponível */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    try {
      localStorage.setItem("tema", tema);
    } catch {
      /* ignora */
    }
  }, [tema]);

  useEffect(() => {
    document.title = "Teacher Pedro | Professor de inglês em Angola (A1–C2)";
  }, []);

  return (
    <>
      <a className="saltar" href="#sobre">Saltar para o conteúdo</a>

      <header className="topo">
        <div className="wrap topo-interno">
          <a className="marca" href="#inicio">Teacher Pedro</a>
          <nav aria-label="Principal">
            {menu.map(([id, nome]) => (
              <a key={id} href={`#${id}`}>{nome}</a>
            ))}
            <button
              type="button"
              className="tema"
              onClick={() => setTema(tema === "dark" ? "light" : "dark")}
              aria-label="Alternar tema claro ou escuro"
            >
              {tema === "dark" ? "Claro" : "Escuro"}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <div className="wrap hero" id="inicio">
          <h1>
            Aprenda inglês do <mark>A1&nbsp;ao&nbsp;C2</mark> com método e prática real.
          </h1>
          <p className="lead">
            Sou professor de inglês em Angola. Cada aula tem objetivo, conversação e
            exercícios à medida do seu nível, de iniciante a proficiente.
          </p>
          <div className="botoes">
            <a className="btn principal" href="#contacto">Marcar uma aula</a>
            <a className="btn alt" href="#materiais">Ver materiais</a>
            <a className="btn alt" href={CATALOGO} target="_blank" rel="noopener noreferrer">
              Ver catálogo de cursos
            </a>
          </div>
          <div className="escada" role="list" aria-label="Níveis de inglês de A1 a C2">
            {niveis.map(([nivel, nome]) => (
              <div key={nivel} role="listitem">{nivel}<small>{nome}</small></div>
            ))}
          </div>
        </div>

        <section id="sobre">
          <div className="wrap sobre">
            <h2>Sobre mim</h2>
            <p>
              Sou o Teacher Pedro, professor de inglês em Angola. Ensino do nível A1 ao C2,
              seguindo o Quadro Europeu Comum de Referência, e cada aula é pensada para o
              seu objetivo: conversar com confiança, ir bem na escola, crescer no trabalho
              ou passar em exames.
            </p>
            <p>
              Tenho formação de educador pelo programa Maple Bear, que orienta a minha forma
              de planear e avaliar aulas. Preparo os meus próprios materiais: ebooks,
              cadernos de exercícios, treino de leitura e ditado. Assim, pode praticar também
              fora da aula e ver o seu progresso de nível em nível.
            </p>
            <p>
              Diga-me o seu nível e o que quer alcançar, e eu indico o curso certo para si.
            </p>
            <a
              className="btn principal"
              href={linkWhatsApp("Olá, Teacher Pedro! Gostava de saber mais sobre as aulas de inglês.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o Teacher Pedro
            </a>
          </div>
        </section>

        <section id="cursos">
          <div className="wrap">
            <h2>Cursos</h2>
            <div className="grelha">
              {cursos.map((c) => (
                <article className="cartao" key={c.titulo}>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                  <div className="acoes">
                    <a
                      className="ligacao"
                      href={linkWhatsApp(`Olá, Teacher Pedro! Tenho interesse no curso ${c.titulo}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pedir este curso
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plataforma">
          <div className="wrap">
            <div className="destaque">
              <div>
                <h2>Plataforma de aulas</h2>
                <p>
                  A minha plataforma online de inglês, com aulas, exercícios, fichas e blog
                  por nível (A1–C2). Funciona no telemóvel e pode ser instalada como aplicação.
                </p>
                <a
                  className="btn principal"
                  href={PLATAFORMA}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir a plataforma
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="materiais">
          <div className="wrap">
            <h2>Materiais e ferramentas de estudo</h2>
            <div className="grelha">
              {materiais.map(([titulo, texto]) => (
                <article className="cartao" key={titulo}>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competencias">
          <div className="wrap">
            <h2>Competências</h2>
            <ul className="tags">
              {competencias.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </section>

        <section id="contacto">
          <div className="wrap contacto">
            <h2>Vamos falar?</h2>
            <p>Diga-me o seu nível e o seu objetivo, e eu indico o melhor curso para si.</p>
            <div className="botoes">
              <a
                className="btn principal"
                href={linkWhatsApp("Olá, Teacher Pedro! O meu nível é _ e o meu objetivo é _.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
              <a className="btn alt" href={`tel:+${WHATSAPP}`}>{TELEFONE}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap rodape">
          <span>© {new Date().getFullYear()} Teacher Pedro, Angola</span>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </footer>

      <a
        className="flutuante"
        href={linkWhatsApp("Olá, Teacher Pedro! Gostava de saber mais sobre as aulas de inglês.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        WhatsApp
      </a>
    </>
  );
}