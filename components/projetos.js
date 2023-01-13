import BordaSuperior from "./bordaSuperior";
// import useSWR from "swr";
import Projeto from "./projeto";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Projetos() {
  // const { data, error } = useSWR("/api/projetos", fetcher);

  // if (error) return <div>Falha ao carregar projetos</div>;
  // if (!data) return <div>Carregando...</div>;
  const data = [
    {
      nome: "Comunismo: Príncípios Básicos e Guia de Leitura",
      url: "https://www.youtube.com/watch?v=cg5winGpx80&t=2979s",
      capa: "https://github.com/souzadevinicius/soberanatv.github.io/blob/gh-pages/comunismo.jpg",
      tags: "vídeo;youtube",
      categoria: "vídeo",
    },
    {
      nome: "Audioteca Crítica",
      url: "",
      capa: "https://github.com/souzadevinicius/soberanatv.github.io/blob/gh-pages/audioteca.jpg?raw=true",
      tags: "audiobook;spotify",
      categoria: "audiobooks",
    },
    {
      nome: "Curso de Formação de Criadores de Conteúdo Nadejda Krúpskaia",
      url: "",
      capa: "https://github.com/souzadevinicius/soberanatv.github.io/blob/gh-pages/curso_conteudo.jpg",
      tags: "curso;aulas",
      categoria: "curso",
    },
    {
      nome: "Entrevista Candidata Priscila Voigt",
      url: "https://www.youtube.com/watch?v=rgx_cL6xcr0",
      capa: "https://github.com/souzadevinicius/soberanatv.github.io/blob/gh-pages/priscila.jpg",
      tags: "vídeo;entrevista",
      categoria: "vídeo",
    },
  ];
  return (
    <>
      <BordaSuperior></BordaSuperior>
      <h1 className="pl-6 text-6xl text-soberana uppercase">projetos</h1>
      <div className="overflow-x-scroll">
        <div className="grid grid-flow-col grid-rows-1 auto-cols-max gap-4">
          {data.map((projeto) => {
            return (
              <div key={projeto.nome} className="p-4">
                <Projeto projeto={projeto} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projetos;
