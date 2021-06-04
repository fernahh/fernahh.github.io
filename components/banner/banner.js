import { P } from 'components/paragraph'
import styles from './banner.module.css'

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles['banner-content']}>
      <P>Olá! Me chamo Fernando. 👋</P>
      <P>
        Sou gerente de engenharia de software e atualmente trabalho no time
        design system do QuintoAndar.
      </P>
    </div>
  </section>
)
