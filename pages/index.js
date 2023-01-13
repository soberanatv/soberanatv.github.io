import Head from "next/head";
import Header from "../components/header";
import Principal from "../components/principal";
import Criadores from "../components/criadores";
import styles from "../styles/Home.module.css";
import Projetos from "../components/projetos";
import Manifesto from "../components/manifesto";
import FAQ from "../components/faq";
import Contato from "../components/contato";
import style from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Soberana</title>
        <meta name="description" content="Soberana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className="grid grid-flow-row">
            <Principal></Principal>
            <Criadores></Criadores>
            <div className="w-full -top-96  right-16 relative">
              <div className={`${style.stick} absolute right-0 top-16`}></div>
            </div>
            <div className="w-full -top-24  right-16 relative">
              <div
                className={`${style.triangulo_esquerda} absolute -right-20 top-16`}
              ></div>
              <div
                className={`${style.triangulo_esquerda} absolute -right-12 top-16`}
              ></div>
              <div
                className={`${style.triangulo_esquerda} absolute -right-4 top-16`}
              ></div>
            </div>
            <div className="pb-32"></div>
            <Projetos></Projetos>
            <div className="pb-32"></div>
            <Manifesto></Manifesto>
            <div className="pb-32"></div>
            <div className="w-full -bottom-2 -right-10 relative">
              <div
                className={`${style.stick_branco} absolute right-0 top-16`}
              ></div>
              <div
                className={`${style.circulo_laranja} absolute right-0`}
              ></div>
              <div
                className={`${style.circulo_rosa} absolute top-4 right-0`}
              ></div>
            </div>
            <FAQ></FAQ>
            <div className="pb-32"></div>
            <Contato></Contato>
          </div>
        </div>
      </main>
    </>
  );
}
