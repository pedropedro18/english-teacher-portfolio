import { useEffect, useState } from "react";
import "./App.css";

const WHATSAPP = "244923030010";

const niveis = [
  ["A1", "Iniciante"],
  ["A2", "Elementar"],
  ["B1", "Intermédio"],
  ["B2", "Intermédio alto"],
  ["C1", "Avançado"],
  ["C2", "Proficiente"],
];

const cursos = [
  { titulo: "Iniciante (A1–A2)", texto: "Vocabulário essencial, frases do dia a dia e pronúncia desde o início.", link: "https://teacher-pedro-cursos.vercel.app" },
  { titulo: "Intermédio (B1–B2)", texto: "Conversar com mais fluência, compreender textos e áudios e escrever com segurança." },
  { titulo: "Avançado (C1–C2)", texto: "Precisão, vocabulário rico e comunicação profissional e académica." },
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
  ["materiais", "Materiais"],
  ["competencias", "Competências"],
  ["contacto", "Contacto"],
];

export default function App() {
  const [tema, setTema] = useState(() => {
    const guardado = localStorage.getItem("tema");
    if (guardado) return guardado;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    <>
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
          <h1>Aprenda inglês do <mark>A1 ao C2</mark> com método e prática real.</h1>
          <p className="lead">
            Sou professor de inglês em Angola. Cada aula tem objetivo, conversação e
            exercícios à medida do seu nível, de iniciante a proficiente.
          </p>
          <div className="botoes">
            <a className="btn principal" href="#contacto">Marcar uma aula</a>
            <a className="btn alt" href="#materiais">Ver materiais</a>
          </div>
          <div className="escada" aria-label="Níveis de inglês de A1 a C2">
            {niveis.map(([nivel, nome]) => (
              <div key={nivel}>{nivel}<small>{nome}</small></div>
            ))}
          </div>
        </div>

        <section id="sobre">
          <div className="wrap sobre">
            <h2>Sobre mim</h2>
            <p>Ensino inglês seguindo os níveis do Quadro Europeu Comum de Referência (A1 a C2), com aulas adaptadas ao objetivo de cada aluno: conversação, escola, trabalho ou exames.</p>
            <p>Preparo os meus próprios materiais e ferramentas de estudo: ebooks, cadernos de exercícios, treino de leitura e ditado, para que o aluno pratique também fora da aula.</p>
            <p>Tenho formação de educador pelo programa Maple Bear, que orienta a minha forma de planear e avaliar aulas.</p>
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
                  {c.link && (
                    <a className="ligacao" href={c.link} target="_blank" rel="noopener noreferrer">
                      Ver catálogo de cursos
                    </a>
                  )}
                </article>
              ))}
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
              <a className="btn principal" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
              <a className="btn alt" href={`tel:+${WHATSAPP}`}>923 030 010</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} Teacher Pedro, Angola</div>
      </footer>
    </>
  );
}