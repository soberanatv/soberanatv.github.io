import links from '../json/links.json'
import creators from '../json/creators.json'
import projects from '../json/projects.json'
import CreatorCard from './CreatorCard'
import ProjectCard from './ProjectCard'
import SideScroller from './SideScroller'
import Manifest from './Manifest'
import { socials } from '@/json/types'

export default function Home() {
  return (<>
    <main>
      {/* BANNER  */}
      <section className="banner full-width-container">
        <h1><strong>Coletivo marxista-leninista de criadores de conteúdo.</strong></h1>
        <a target="_blank" href={links.socials.discord.link} className="button">
          <svg><use href={`#${links.socials.discord.svg.id}`}></use></svg>
          Junte-se no Discord
        </a>
      </section>

      {/* CREATORS  */}
      <hr />
      <section>
        <h2 data-reflection="Membros">Membros</h2>
        {/* randomized so that every creator has the chance to apear first (not 100% random, this method has some bias -> https://javascript.info/task/shuffle) */}
        {/* could set to only randomize once a day via nextjs*/}
        <SideScroller>
          {creators.sort(() => Math.random() - 0.5).map(({ name, link, image, description, pronouns }) => <CreatorCard
            name={name}
            link={link}
            image={image}
            description={description}
            pronouns={pronouns}
            key={name}
          />)}
        </SideScroller>
      </section>

      {/* PROJETOS  */}
      <hr />
      <section>
        <h2 data-reflection="Projetos">Projetos</h2>
        <SideScroller>
          {projects.map(({ name, image, description, link }) => <ProjectCard
            name={name}
            image={image}
            description={description}
            link={link}
            key={name}
          />)}
        </SideScroller>
      </section>

      {/* MANIFESTO  */}
      <hr />
      <section>
        <h2 data-reflection="Manifesto">Manifesto</h2>
        <Manifest />
      </section>

      {/* FAQ  */}
      {/* não sei como generalizar essa parte sem bugar as tags <a/> no meio das tags <p/> */}
      <hr />
      <section>
        <h2 data-reflection="FAQ">FAQ</h2>
        <div id="faq">
          <details className="container">
            <summary>Qual objetivo do coletivo?</summary>
            <p>Nosso objetivo como coletivo Soberana é atuar na disputa pela consciência política dos trabalhadores na
              internet, ocupando os espaços virtuais mais utilizados. Estamos determinados a combater a predominância de
              conteúdo político reacionário que influencia a internet, manipulado por monopólios de empresas de tecnologia e
              agências de telecomunicações. Utilizaremos a internet como uma ferramenta para fomentar a organização dos
              trabalhadores, impulsionar o avanço da consciência política e difundir o marxismo-leninismo para toda a classe
              trabalhadora.</p>
          </details>
          <details className="container">
            <summary>O que é socialismo?</summary>
            <p>Do ponto de vista marxista-leninista, o socialismo é um sistema socioeconômico que busca a superação das
              contradições e injustiças presentes no sistema capitalista. É uma etapa de transição entre o capitalismo e o
              comunismo.</p>
            <p>No socialismo, a classe trabalhadora se torna a classe dominante, assumindo o controle dos meios de produção e
              eliminando a exploração do trabalho. A propriedade privada dos meios de produção é substituída pela propriedade
              social, visando o benefício de toda a sociedade e não apenas de uma classe privilegiada. Isso permite uma
              distribuição mais justa da riqueza, com o objetivo de eliminar as desigualdades sociais e proporcionar condições
              dignas de vida para todos.</p>
          </details>
          <details className="container">
            <summary>Como posso apoiar o coletivo?</summary>
            <p>Para apoiar o coletivo Soberana, a melhor forma é acompanhar nossas atividades através das redes sociais e
              participar de nosso <a href={links.socials.discord.link} target="_blank" rel="noopener noreferer">Discord</a>.
              Nossas redes sociais são espaços onde compartilhamos conteúdos, transmissões ao vivo, vídeos, textos,
              ilustrações e podcasts com o objetivo de promover a conscientização política e a disseminação do discurso
              comunista. Seguir nossas páginas e perfis nas redes sociais nos ajudará a ampliar nosso alcance e a compartilhar
              informações importantes.</p>
            <p>Caso você queira disponibilizar seu trabalho para o coletivo, pedimos que preencha o <a
              href={links.colab} target="_blank" rel="noopener noreferer">Formulário de Colaboração</a>. Sempre
              consultamos o formulário tanto para recrutamentos quanto para colaborações eventuais.</p>
            {/* <!-- <p>Além de acompanhar nossas redes sociais e participar de nosso Discord, outra forma de apoiar o coletivo Soberana é através da plataforma "Apoia.se". Nessa plataforma, você tem a oportunidade de fazer contribuições financeiras mensais para nos ajudar a manter nossas atividades e fortalecer nossa atuação online. Se você acredita em nossa causa e deseja contribuir de forma mais direta, essa é uma excelente opção para fornecer suporte financeiro contínuo ao coletivo.</p><p>Também temos uma loja online onde disponibilizamos produtos relacionados ao coletivo Soberana, como camisetas, adesivos, bonés e outros materiais. Ao adquirir esses produtos, você estará apoiando financeiramente o coletivo e também poderá disseminar nossa mensagem ao utilizar esses itens no seu dia a dia. Além disso, ao adquirir produtos da nossa loja, você estará contribuindo para a visibilidade do coletivo e para a divulgação do discurso comunista nas plataformas virtuais.</p> --> */}
          </details>
        </div>
      </section>
    </main>

    {/* <!-- CONTACT --> */}
    <footer id="contact-container">
      <hr id="contact-hr" />
      <h2 data-reflection="Contato">Contato</h2>
      <section className="grid-container">
        <div className="text">
          <p>Entre em contato conosco para possíveis parcerias, tirar dúvidas ou apenas debater e trocar uma ideia.</p>
          <p>Utilizamos o Discord como ferramenta principal de comunicação, acesse nosso servidor clicando no ícone abaixo e junte-se à nossa comunidade.</p>
        </div>
        <div className="container form">
          <h3>Entre em contato por e-mail</h3>

          {/* // ! add later on form onSubmit={() => 'sendEmail()'} */}
          <form id="formulario" >
            <fieldset>
              <legend>Nome</legend>
              <input type="text" id="name" name="name" placeholder="Digite seu nome" required autoComplete="off" /><br />
            </fieldset>
            <fieldset>
              <legend>E-mail</legend>
              <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required autoComplete="off" /><br />
            </fieldset>
            <fieldset>
              <legend>Assunto</legend>
              <input type="text" id="subject" name="subject" placeholder="Digite o assunto do e-mail" required autoComplete="off" /><br />
            </fieldset>
            <fieldset>
              <legend>Mensagem</legend>
              <textarea id="message" name="message" placeholder="Digite a sua mensagem" required autoComplete="off"></textarea>
            </fieldset>
            <button className="button" type="submit">Enviar e-mail</button>
          </form>
        </div>

        <div className="social-media">
          <h3>Nossas redes:</h3>
          <ul>
            {Object.values(links.socials).map(({ name, link, svg: { id } }: socials[string]) => (
              <li key={name}>
                <a href={link}>
                  <svg><use href={`#${id}`}></use></svg>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <a href="#" className="back-to-top">
        <svg><use href="#radix-triangle-up-icon"></use></svg>
        Voltar para o topo
      </a>
    </footer>
  </>
  )
}
