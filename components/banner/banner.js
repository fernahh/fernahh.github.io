import { ArrowLink } from 'components/arrow-link'
import { Link } from 'components/link'
import { P } from 'components/paragraph'
import styles from './banner.module.css'

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles['banner-content']}>
      <P>Olá! 👋</P>
      <P>
        Me chamo Fernando Rodrigues. Sou desenvolvedor e atualmente moro em São
        Paulo, SP. Atualmente trabalho no time design system no QuintoAndar.
      </P>
      <div className={styles['banner-links']}>
        <P>
          <ArrowLink
            href="http://google.com"
            title="Link para a página com detalhes sobre mim"
          >
            leia mais sobre mim →
          </ArrowLink>
        </P>
        <P>
          <ArrowLink href="https://twitter.com/fernahh">
            @fernahh no twitter →
          </ArrowLink>
        </P>
      </div>
    </div>
  </section>
)
