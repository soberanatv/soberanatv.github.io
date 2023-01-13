import Image from "next/image";
import logo from "../public/logo.png";
import BordaSuperior from "./bordaSuperior";
import styles from "../styles/Criador.module.css";
import useSWR from "swr";
import Projeto from "./projeto";
import Criador from "./criador";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Projetos() {
  const { data, error } = useSWR("/api/projetos", fetcher);

  if (error) return <div>Falha ao carregar projetos</div>;
  if (!data) return <div>Carregando...</div>;
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
