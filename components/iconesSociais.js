import {
  faTwitter,
  faTwitch,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconesSociais = (item) => {
  const icones = [
    {
      nome: "Instagram",
      url: "instagram.com",
      icone: faInstagram,
    },
    {
      nome: "YouTube",
      url: "youtube.com",
      icone: faYoutube,
    },
    {
      nome: "Twitch",
      url: "twitch.tv",
      icone: faTwitch,
    },
    {
      nome: "TikTok",
      url: "tiktok.com",
      icone: faTiktok,
    },
    {
      nome: "Twitter",
      url: "twitter.com",
      icone: faTwitter,
    },
  ];
  const iconeEncontrado =
    icones.filter((icone) => {
      return item.url.toLowerCase().includes(icone.url.toLowerCase());
    })[0] || "";
  return iconeEncontrado ? (
    <div>
      <FontAwesomeIcon icon={iconeEncontrado.icone} /> {iconeEncontrado.nome}
    </div>
  ) : (
    ""
  );
};

export default IconesSociais;
