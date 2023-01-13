import Head from "next/head";
import Header from "../components/header";
import Principal from "../components/principal";
import Criadores from "../components/criadores";
import styles from "../styles/Home.module.css";
import Projetos from "../components/projetos";
import Manifesto from "../components/manifesto";
import FAQ from "../components/faq";
import Contato from "../components/contato";

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
            <div className="pb-24"></div>
            <Projetos></Projetos>
            <div className="pb-24"></div>
            <Manifesto></Manifesto>
            <div className="pb-24"></div>
            <FAQ></FAQ>
            <div className="pb-24"></div>
            <Contato></Contato>
          </div>
        </div>
      </main>
    </>
  );
}
