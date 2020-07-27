import { Link } from 'components/link'
import { Time } from 'components/time'
import styles from './summary.module.css'

export const Summary = ({ category, date, href, title }) => (
  <div className={styles.summary}>
    <Link
      className={styles['summary-link']}
      href={href || 'http://www.google.com'}
      title={`Link para ${title}`}
    >
      {title}
    </Link>
    <Time category={category} date={date} />
  </div>
)
