import { Link } from 'components/link'
import { P } from 'components/paragraph'
import { Time } from 'components/time'
import styles from './summary.module.css'

export const Summary = ({ category, date, description, href, title }) => (
  <div className={styles.summary}>
    <Time category={category} date={date} />
    <Link
      className={styles['summary-link']}
      href={href || 'http://www.google.com'}
      title={`Link para ${title}`}
    >
      {title}
    </Link>
    {description && <P>{description}</P>}
  </div>
)
