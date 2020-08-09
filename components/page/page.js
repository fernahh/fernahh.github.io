import { Header } from 'components/header'
import { Meta } from 'components/meta'
import styles from './page.module.css'

export const Page = ({ children }) => (
  <>
    <Meta />
    <div className={styles.page}>
      <Header />
      <div className={styles['page-content']}>{children}</div>
      <ul className={styles['page-list']}>
        <li className={styles['page-item']}>🌿</li>
      </ul>
    </div>
  </>
)
