import { Head } from 'components/head'
import { Header } from 'components/header'
import styles from './page.module.css'

export const Page = ({ children, fullWidth }) => (
  <>
    <Head />
    <div className={styles.page}>
      <div className={styles['page-header']}>
        <Header />
      </div>
      <main
        className={`${styles['page-content']} ${
          fullWidth ? styles['is-full-width'] : ''
        }`}
      >
        {children}
      </main>
    </div>
    <ul className={styles['page-list']}>
      <li className={styles['page-item']}>🌿</li>
    </ul>
  </>
)
