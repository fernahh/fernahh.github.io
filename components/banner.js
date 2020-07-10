import { Fragment } from 'react'
import { Link } from 'components/link'
import { H1 } from 'components/heading'
import { P } from 'components/paragraph'
import { useTheme } from 'hooks/useTheme'

export const Banner = () => {
  const { mediaQueries, sizes, viewport } = useTheme()

  return (
    <Fragment>
      <section>
        <div>
          <H1>Fernando Rodrigues</H1>
          <P>
            Sou desenvolvedor de software no{' '}
            <Link
              href="https://www.quintoandar.com.br/"
              title="Site da QuintoAndar"
            >
              QuintoAndar
            </Link>
            . Busco desenvolver aplicações que tenham impacto através de
            tecnologias web. Compartilho conteúdo via palestras, posts e
            open-source. Obrigado pela visita! 👋
          </P>
        </div>
        <img src="/profile.jpg" alt="Foto de perfil" />
      </section>
      <style jsx>
        {`
          section {
            display: flex;
            align-items: center;
            margin: 0;
            max-width: ${viewport.maxWidth};
            height: 100vh;
          }

          img {
            display: none;
          }

          @media screen and (min-width: ${mediaQueries.medium}) {
            section {
              align-items: flex-end;
              height: 40vh;
              margin-left: auto;
              margin-right: auto;
              padding-top: 10%;
              padding-bottom: 10%;
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

          @media screen and (min-width: ${mediaQueries.large}) {
            div {
              margin-right: ${sizes.extraLarge};
            }
          }
        `}
      </style>
    </Fragment>
  )
}
