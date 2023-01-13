import Image from "next/image";
import styles from "../styles/Criador.module.css";
function Projeto({ projeto }) {
  return (
    <div className={styles.card}>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-black max-w-sm text-center">
          <div style={{ height: "550px" }} className="relative">
            <p className="text-soberana-white text-base mb-4">
              <Image
                className="object-fill h-80 w-80"
                src={projeto.capa}
                alt={projeto.nome}
                width={500}
                height={500}
              ></Image>
            </p>
            <p className="text-lg text-justify">{projeto.nome}</p>
            {projeto.tags.split(";").map((tag) => {
              return (
                <span
                  key={tag}
                  className="pl-4 inline float-left text-gray-400"
                >
                  #{tag}
                </span>
              );
            })}
            <div className="pt-5 pr-5 absolute bottom-0 right-0">
              <a
                className="inline-block px-6 py-2.5 bg-white text-soberana-red  font-bold rounded-full shadow-md mb-4 float-right"
                href={projeto.url}
                target="_blank"
                rel="noreferrer"
              >
                Acessar {projeto.categoria}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projeto;
