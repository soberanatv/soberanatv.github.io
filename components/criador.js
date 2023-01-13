import Image from "next/image";
import logo from "../public/logo-com-texto.png";
import styles from "../styles/Criador.module.css";
// import {  } from "@fortawesome/free-solid-svg-icons";
import IconesSociais from "./iconesSociais.js";
function Criador({ criador }) {
  return (
    <div className={styles.card}>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-black max-w-sm text-center">
          <h5 className="soberana-white text-xl font-medium mb-2 text-left pl-4">
            {criador.nome}
          </h5>
          <div>
            <div className="border-b border-white-300 text-left text-soberana-white pl-4">
              {criador.url}
            </div>
            <p className="text-soberana-white text-base mb-4">
              <Image
                src={logo}
                alt={criador.nome}
                width={500}
                height={500}
              ></Image>
            </p>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-soberana-red text-white font-medium uppercase rounded shadow-md mb-4"
            >
              <IconesSociais url={criador.url}></IconesSociais>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Criador;
