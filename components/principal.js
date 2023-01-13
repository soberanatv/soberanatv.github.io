import Image from "next/image";
import logo from "../public/principal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <>
      <div className="relative -top-24" id="principal">
        <Image
          className="object-fill w-full"
          style={{ height: "64rem" }}
          src={logo}
          height={300}
          alt="SOBERANA"
        ></Image>
        <div>
          <h1 className="absolute font-semibold text-6xl text-white top-1/3 left-0 lg:pl-48 pl-6 w-3/6">
            Coletivo marxista-leninista de Criadores de Conteúdo
            <div>
              <button
                type="button"
                className="inline px-6 py-2.5 bg-white text-soberana-red  text-base font-bold rounded-full shadow-md mb-4"
                onClick={() => (window.location = "mailto:yourmail@domain.com")}
              >
                <a
                  href="https://discord.com/invite/BZxknXgryM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                  <span className="pl-2">Junte-se no Discord</span>
                </a>
              </button>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
