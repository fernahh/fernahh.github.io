import { Link } from 'components/link'
import styles from './arrow-link.module.css'

export const ArrowLink = ({ href, title, children, ...props }) => (
  <span className={styles['arrow-link']}>
    <Link href={href} title={title} {...props}>
      {children}
    </Link>
  </span>
)
