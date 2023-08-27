'use client'

import { useState } from "react"

export default function Manifest() {
  const [open, setOpen] = useState(false);

  return (
    <article id="manifesto" className="container">
      <p>A Soberana é um coletivo marxista-leninista que atua na disputa pela consciência política dos trabalhadores na internet. Dado o crescimento do acesso à internet via celulares no cotidiano da classe trabalhadora, julgamos necessário ocupar os espaços virtuais mais utilizados.</p>
      <p>Nossa fundação parte do entendimento que a esmagadora maioria do conteúdo disponível na internet, seja abertamente político ou não, é tomado por linhas reacionárias. Os motivos que culminaram nessa realidade são diversos e complexos, derivando tanto dos monopólios das “Big Techs”, quanto das agências de telecomunicações. Essas empresas determinam a qualidade e acessibilidade da internet em território nacional, ao mesmo tempo que controlam os algoritmos dos sites que acessamos.</p>
      {open && <p>As alas à direita, aproveitando-se da colaboração dessas companhias, frequentemente difundem seu discurso com métodos escusos e generosamente financiados. Dessa forma, os algoritmos são apreendidos pelo conservadorismo do senso comum, o liberalismo que luta com unhas e dentes contra a dignidade da classe trabalhadora e o negacionismo calcado nos interesses da burguesia, frequentemente sob a vista grossa da legislação.</p>}
      {open && <p>Boa parte da esquerda que produz conteúdo para a internet age somente pela perspectiva de agitação e propaganda. Apesar de entendermos a importância da agitprop, nós propomos ir além. Nosso projeto consiste em utilizar a internet para fomentar a organização dos trabalhadores, o avanço da consciência política, a divulgação e a capilarização do marxismo-leninismo no cotidiano de toda a classe.</p>}
      {open && <p>Dado o modelo de funcionamento das redes, sabemos que a qualquer momento podemos ser banidos e/ou bloqueados das plataformas que utilizamos. Por isso, julgamos necessária a construção de uma rede sólida de camaradas, a fim de garantir a continuidade das nossas atividades, para além de qualquer única rede social.</p>}
      {open && <p>Para concretizar esse projeto criamos espaços de discussão, diálogo e formação política. Entretanto, o objetivo é não nos restringirmos ao conteúdo acadêmico, explorando formas de entretenimento político mais adequadas aos potenciais da internet. Produzimos de maneira cotidiana transmissões ao vivo, vídeos, textos e ilustrações, priorizando nossa proximidade com a comunidade.</p>}
      {open && <p>Somos criadores de conteúdo com trabalhos variados sob a perspectiva de disseminar o discurso comunista nas plataformas virtuais. Alinhando-se a isso, promovemos o contato direto com a base de trabalhadores que consomem cotidianamente conteúdo na internet.</p>}
      <br />
      <button className="button" type="button" onClick={() => { setOpen((prev) => !prev) }} >
        <svg><use href={open ? "#radix-triangle-up-icon" : "#radix-triangle-down-icon"}></use></svg>
        {open ? 'Ver menos' : 'Ver mais'}
      </button>
    </article>
  )
}