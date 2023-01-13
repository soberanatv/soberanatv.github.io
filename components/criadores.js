import Criador from "./criador";
// import useSWR from "swr";
import BordaSuperior from "./bordaSuperior";
import Image from "next/image";
import PhoneImage from "../public/phone.jpg";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Criadores() {
  // const { data, error } = useSWR("/api/criadores", fetcher);

  // if (error) return <div>Falha ao carregar criadores</div>;
  // if (!data) return <div>Carregando...</div>;

  const data = [
    {
      nome: "Ana Neves",
      url: "https://www.instagram.com/souananeves/",
    },
    {
      nome: "Azhariel",
      url: "https://twitch.tv/azhariel",
    },
    {
      nome: "Bebel Abelinha",
      url: "https://www.tiktok.com/@bebel_abelhinha",
    },
    {
      nome: "Bonzago",
      url: "https://www.instagram.com/lhugocaetano/",
    },
    {
      nome: "Comuninja",
      url: "https://twitch.tv/c0muninja",
    },
    {
      nome: "Dados Revolucionários",
      url: "https://twitch.tv/dadosrevolucionarios",
    },
    {
      nome: "Delírios Comunas",
      url: "https://www.instagram.com/delirioscomunas/",
    },
    {
      nome: "Froggy",
      url: "https://twitch.tv/0froggy",
    },
    {
      nome: "Groselha Atômica",
      url: "https://www.instagram.com/groselha_atomica/",
    },
    {
      nome: "Gus Bringel",
      url: "https://www.instagram.com/gu.bringel/",
    },
    {
      nome: "João Carvalho",
      url: "https://www.youtube.com/@assimdisseojoao",
    },
    {
      nome: "História da Imagem",
      url: "https://www.tiktok.com/@historiadaimagem",
    },
    {
      nome: "História Pública",
      url: "https://twitch.tv/historiapublica",
    },
    {
      nome: "Humberto Matos",
      url: "https://www.youtube.com/@HumbertoMatos",
    },
    {
      nome: "Historiatopia",
      url: "https://twitch.tv/historiatopia",
    },
    {
      nome: "Naná Caligari",
      url: "https://www.tiktok.com/@bruxacomunista",
    },
    {
      nome: "SovietLunox",
      url: "https://www.twitch.tv/sovietlunox",
    },
    {
      nome: "Tarcisioe",
      url: "https://www.youtube.com/tarcisioe",
    },
    {
      nome: "Vinny Days",
      url: "https://twitch.tv/vinnydays",
    },
    {
      nome: "Zawacki",
      url: "https://www.twitch.tv/LucasZawacki",
    },
  ];

  return (
    <>
      <BordaSuperior></BordaSuperior>
      <h1 className="pl-6 text-6xl text-soberana">CRIADORES</h1>
      <div className="overflow-x-scroll">
        <div className="grid grid-flow-col grid-rows-1 auto-cols-max gap-4">
          {data.map((criador) => {
            return (
              <div key={criador.nome} className="p-4">
                <Criador criador={criador} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-4 pl-6 pr-6 pt-32">
        <div>
          <Image
            className="
            object-fill w-80
            shadow rounded-full align-middle border-solid border-4 border-soberana-red"
            src={PhoneImage}
            alt="Phone"
          ></Image>
        </div>
        <div className="col-span-2">
          <p className="text-5xl text-sobera-white">
            Gostaria de se tornar um <strong>criador de conteúdo</strong> do
            nosso coletivo?
          </p>
          <p className="text-xl">
            <strong>Clique no botão abaixo</strong> e nos envie um{" "}
            <strong>e-mail</strong> para iniciarmos as conversas
          </p>
          <div className="pl-6">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-soberana-red  uppercase font-bold rounded-full shadow-md mb-4"
              onClick={() => (window.location = "mailto:yourmail@domain.com")}
            >
              Enviar e-mail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Criadores;
