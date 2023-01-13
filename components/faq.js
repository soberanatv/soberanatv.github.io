import BordaSuperior from "./bordaSuperior";
import { useState } from "react";
import useSWR from "swr";
import Accordion from "./accordion";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const { data, error } = useSWR("/api/faq", fetcher);
  console.log(data);
  if (error) return <div>Falha ao carregar perguntas</div>;
  if (!data) return <div>Carregando...</div>;
  return (
    <>
      <BordaSuperior></BordaSuperior>
      <h1 className="pl-6 text-6xl text-soberana">FAQ</h1>
      <div className="w-3/4 pt-10 pb-10  m-auto">
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
