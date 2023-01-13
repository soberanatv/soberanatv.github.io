import BordaSuperior from "./bordaSuperior";
// import useSWR from "swr";
import Accordion from "./accordion";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FAQ() {
  // const { data, error } = useSWR("/api/faq", fetcher);
  // if (error) return <div>Falha ao carregar perguntas</div>;
  // if (!data) return <div>Carregando...</div>;
  const data = [
    {
      titulo: "Qual o objetivo do coletivo?",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      titulo: "O que é socialismo?",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      titulo: "Como posso apoiar o coletivo?",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  return (
    <>
      <BordaSuperior></BordaSuperior>
      <h1 className="pl-6 lg:pt-0 pt-48  text-6xl text-soberana">FAQ</h1>
      <div className="w-3/4 lg:pt-10 lg:pb-10 pt-24 pb-24  m-auto">
        {data.map(({ titulo, descricao }) => {
          return (
            <Accordion titulo={titulo} descricao={descricao} key={titulo} />
          );
        })}
      </div>
    </>
  );
}

export default FAQ;
