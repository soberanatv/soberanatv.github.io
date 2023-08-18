import '../styles/home.scss'
import Image from 'next/image'
import links from '../json/links.json'
import { socials } from '@/json/types'

const headerLinks = [
  {
    text: 'Membros',
    aHref: '#creators-hr',
    svgHref: '#fa-people-icon'
  }, {
    text: 'Projetos',
    aHref: '#projects-hr',
    svgHref: '#fa-book-icon'
  }, {
    text: 'Manifesto',
    aHref: '#manifesto-hr',
    svgHref: '#fa-scroll-icon'
  }, {
    text: 'FAQ',
    aHref: '#faq-hr',
    svgHref: '#fa-circle-question'
  }, {
    text: 'Contato',
    aHref: '#contact-hr',
    svgHref: '#fa-mail-icon'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="robots" content="all" />
        <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Soberana</title>
      </head>

      <body>
        <svg style={{ display: 'none' }}>
          <defs>
            {/* there is a package for 'fontawesome' in react, just saying because i didn't used it */}
            { /* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
            {Object.values(links.socials).map(({ svg: { id, viewBox, path } }: socials[string]) => (
              <symbol key={id} id={id} viewBox={viewBox}>
                <path d={path} />
              </symbol>
            ))}
            <symbol id="fa-people-icon" viewBox="0 0 640 512">
              <path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </symbol>
            <symbol id="fa-book-icon" viewBox="0 0 448 512">
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </symbol>
            <symbol id="fa-scroll-icon" viewBox="0 0 576 512">
              <path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
            </symbol>
            <symbol id="fa-mail-icon" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </symbol>
            { /* <!-- RADIX --> */}
            <symbol id="radix-triangle-up-icon" viewBox="0 0 15 15">
              <path d="M4 9H11L7.5 4.5L4 9Z" />
            </symbol>
            <symbol id="radix-triangle-down-icon" viewBox="0 0 15 15">
              <path d="M4 6H11L7.5 10.5L4 6Z" />
            </symbol>
            <symbol id="fa-circle-question" viewBox="0 0 512 512">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                { /* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </symbol>
          </defs>
        </svg>

        <div className='app-container'>
          <header>
            <a href="#"><h1><Image src="images/logo.svg" alt='Logo Soberana' width={72} height={80} />Soberana</h1></a>
            <nav>
              <ul>
                {headerLinks.map(({ text, aHref, svgHref }) => (
                  <li key={text}>
                    <a href={aHref}>
                      <svg><use href={svgHref}></use></svg>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
