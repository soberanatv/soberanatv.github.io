import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitch,
  faInstagram,
  faTiktok,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import BordaSuperior from "./bordaSuperior";
function Contato() {
  return (
    <>
      <BordaSuperior></BordaSuperior>
      <h1 className="pl-6 text-6xl text-soberana uppercase">Contato</h1>
      <div className="grid grid-flow-row-dense lg:grid-cols-6 grid-cols-3 pl-6 pr-6 pt-12 ">
        <div className="col-start-1 col-span-2 text-xl text-justify text-sobera-white">
          <p>
            Entre em contato conosco para possíveis
            <strong> parcerias, se candidatar a criador</strong> de conteúdo,
            <strong> tirar dúvidas</strong> ou apenas debater e trocar uma
            ideia.
          </p>
          <p>
            Utilizamos o <strong>Discord</strong> como ferramenta principal de
            <strong> comunicação</strong>, acesse nosso servidor clicando no
            ícone abaixo e junte-se ao nosso coletivo.
          </p>
        </div>
        <div className="col-start-1 row-span-2 col-span-2 text-xl text-justify text-sobera-white">
          <div className="pl-4 pr-4 pt-24">
            <h4 className="uppercase text-soberana text-2xl text-white pb-2">
              Nossas redes:
            </h4>
            <div className="grid grid-flow-row lg:grid-cols-3  grid-cols-1 text-xl  gap-4 ">
              <a
                href="https://discord.gg/BZxknXgryM"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} />
                <span>Discord</span>
              </a>
              <a
                href="https://www.twitter.com/Soberana_TV"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.twitch.tv/team/soberana"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitch} />
                <span className="pl">Twitch</span>
              </a>
              <a
                href="https://www.tiktok.com/@cortescanhotos"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} />
                <span>TikTok</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UC8tnKW-FN6LdvKazw5RmOOQ"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/soberana.tv/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
            </div>
            <div className="text-base pt-20 text-soberana-red">
              <a href="#principal">
                <FontAwesomeIcon icon={faChevronUp} />
                Voltar ao Topo
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-start-3 col-start-1  row-span-2 col-span-full text-xl text-justify text-sobera-white lg:pl-24">
          <div className="border-red-soberana text-gray-light cursor-pointer border-4 border-soberana-red">
            <div className="pl-12 pr-12 pt-6 pb-6">
              <h4 className="uppercase text-soberana text-white text-2xl pb-4">
                Entre em contato por email
              </h4>

              <form className="shadow-xl overflow-hidden space-y-10 pb-12">
                <div className="relative z-0 px-2 w-full group">
                  <label className="font-mono font-bold text-[14px] text-soberana-white bg-black relative px-1 top-4 left-3 w-auto group-focus-within:text-soberana-red">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="h-16 text-10 bg-black border py-55-rem border-soberana-white text-white text-sm rounded-md  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Digite seu nome"
                    required
                  />
                  <label className="font-mono  font-bold text-[14px] text-soberana-white bg-black relative px-1 top-4 left-3 w-auto group-focus-within:text-soberana-red">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="h-16 text-10 bg-black border py-55-rem border-soberana-white text-white text-sm rounded-md  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                    placeholder="Digite seu e-mail"
                  />
                  <label className="font-mono font-bold text-[14px] text-soberana-white bg-black relative px-1 top-4 left-3 w-auto group-focus-within:text-soberana-red">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="assunto"
                    id="assunto"
                    required
                    className="h-16 text-10 bg-black border py-55-rem border-soberana-white text-white text-sm rounded-md  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Digite o assunto do e-mail"
                  />
                  <label className="font-mono font-bold text-[14px] text-soberana-white bg-black relative px-1 top-4 left-3 w-auto group-focus-within:text-soberana-red">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    className="h-40 text-10 bg-black border py-55-rem border-soberana-white text-white text-sm rounded-md  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Digite a sua mensagem"
                    maxLength="160"
                    required
                    rows="20"
                  />
                  <div className="pt-6">
                    <input
                      type="submit"
                      className="inline-block px-6 py-2.5 bg-white text-soberana-red  font-semibold rounded-full shadow-md mb-4"
                      onClick={() =>
                        (window.location = "mailto:yourmail@domain.com")
                      }
                      value="Enviar e-mail"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
