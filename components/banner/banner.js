import { Link } from 'components/link'
import { P } from 'components/paragraph'
import styles from './banner.module.css'

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles['banner-content']}>
      <P>
        Olá! 👋 <br />
        Me chamo Fernando Rodrigues. Sou desenvolvedor e atualmente moro em São
        Paulo, SP. Atualmente trabalho no time design system no{' '}
        <Link
          href="https://www.quintoandar.com.br/"
          title="Site da QuintoAndar"
        >
          QuintoAndar
        </Link>
        .
      </P>
    </div>
  </section>
)
