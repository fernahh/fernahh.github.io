import { Fragment } from 'react'
import { Link } from '../components/link'
import { H1 } from '../components/heading'
import { useTheme } from '../hooks/useTheme'

export const Banner = () => {
  const { colors, sizes } = useTheme()

  return (
    <Fragment>
      <section>
        <div>
          <H1>Fernando Rodrigues</H1>
          <p>
            Desenvolvedor de Software na{' '}
            <Link
              href="https://www.quintoandar.com.br/"
              title="Site da QuintoAndar"
            >
              QuintoAndar
            </Link>
            . Busco desenvolver aplicações que tenham impacto através de
            tecnologias web. Compartilho conteúdo via palestras, posts e open
            source. Obrigado pela visita! 👋
          </p>
        </div>
        <img src="/profile-400x400.png" alt="Foto de perfil" />
      </section>
      <style jsx>
        {`
          section {
            margin: 0;
            max-width: 970px;
          }

          p {
            color: ${colors.grey};
            font-size: 19px;
            line-height: 30px;
          }

          img {
            display: none;
          }

          @media screen and (min-width: 768px) {
            section {
              display: flex;
              align-items: center;
              margin: auto;
              height: 100vh;
            }

            div {
              width: 80%;
              margin-right: ${sizes.medium};
            }

            img {
              display: block;
              width: 20%;
              border-radius: 50%;
            }
          }

          @media screen and (min-width: 940px) {
            div {
              margin-right: ${sizes.extraLarge};
            }
          }
        `}
      </style>
    </Fragment>
  )
}
