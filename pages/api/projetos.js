export default function handler(req, res) {
  res.status(200).json([
    {
      nome: "Comunismo: Príncípios Básicos e Guia de Leitura",
      url: "https://www.youtube.com/watch?v=cg5winGpx80&t=2979s",
      capa: "/comunismo.jpg",
      tags: "vídeo;youtube",
      categoria: "vídeo",
    },
    {
      nome: "Audioteca Crítica",
      url: "",
      capa: "/audioteca.jpg",
      tags: "audiobook;spotify",
      categoria: "audiobooks",
    },
    {
      nome: "Curso de Formação de Criadores de Conteúdo Nadejda Krúpskaia",
      url: "",
      capa: "/curso_conteudo.jpg",
      tags: "curso;aulas",
      categoria: "curso",
    },
    {
      nome: "Entrevista Candidata Priscila Voigt",
      url: "https://www.youtube.com/watch?v=rgx_cL6xcr0",
      capa: "/priscila.jpg",
      tags: "vídeo;entrevista",
      categoria: "vídeo",
    },
  ]);
}
