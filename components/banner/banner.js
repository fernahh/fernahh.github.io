import { Link } from 'components/link'
import { H1 } from 'components/heading'
import { P } from 'components/paragraph'
import styles from './banner.module.css'

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles['banner-content']}>
      <H1>Fernando Rodrigues</H1>
      <P>
        Sou desenvolvedor de software no{' '}
        <Link
          href="https://www.quintoandar.com.br/"
          title="Site da QuintoAndar"
        >
          QuintoAndar
        </Link>
        . Busco desenvolver aplicações que tenham impacto através de tecnologias
        web. Compartilho conteúdo via palestras, posts e open-source. Obrigado
        pela visita! 👋
      </P>
    </div>
    <img
      className={styles['banner-profile']}
      src="/profile.jpg"
      alt="Foto de perfil"
    />
  </section>
)
