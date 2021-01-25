import { P } from 'components/paragraph'
import styles from './banner.module.css'

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles['banner-content']}>
      <P>Olá! Me chamo Fernando. 👋</P>
      <P>
        Sou desenvolvedor e atualmente trabalho no time design system no
        QuintoAndar.
      </P>
    </div>
  </section>
)
