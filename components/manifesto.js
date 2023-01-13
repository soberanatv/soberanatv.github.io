import BordaSuperior from "./bordaSuperior";
import style from "../styles/Manifesto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Manifesto() {
  return (
    <>
      <BordaSuperior></BordaSuperior>
      <h1 className="pl-6 text-6xl text-soberana uppercase">Manifesto</h1>
      <div className="flex flex-wrap justify-center items-center pr-12 pb-24">
        <div className="relative pr-24">
          <div className={`${style.manifesto_main} relative`}>
            <div
              className={`${style.window} border-4 border-soberana-red  border-opacity-50`}
            >
              <div
                className={`${style.window} border-4 border-soberana-red border-opacity-75`}
              >
                <div className={`${style.window} border-4 border-soberana-red`}>
                  <div className="text-justify text-2xl text-white">
                    <div className="w-3/4 pt-10 pb-10  m-auto">
                      <p>
                        A Soberana é um coletivo marxista-leninista que atua na
                        disputa pela consciência política dos trabalhadores na
                        internet. Dado o crescimento do acesso à internet via
                        celulares no cotidiano da classe trabalhadora, julgamos
                        necessário ocupar os espaços virtuais mais utilizados.
                      </p>
                      <p>
                        Nossa fundação parte do entendimento que a esmagadora
                        maioria do conteúdo disponível na internet, seja
                        abertamente político ou não, é tomado por linhas
                        reacionárias. Os motivos que culminaram nessa realidade
                        são diversos e complexos, derivando tanto dos monopólios
                        das Big Techs, quanto das agências de telecomunicações.
                        Essas empresas determinam a qualidade e acessibilidade
                        da internet em território nacional, ao mesmo tempo que
                        controlam os algoritmos dos sites que acessamos.
                      </p>
                      <div className="float-left pl-3">
                        <a
                          className="px-6 py-2.5 bg-white text-soberana-red  font-bold rounded-full shadow-md mb-4 float-right text-base"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                          Ver mais
                        </a>
                      </div>
                      <div className="p-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manifesto;
