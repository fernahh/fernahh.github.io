import { Meta } from 'components/meta'
import { AppBar } from 'components/app-bar'
import styles from './page.module.css'

export const Page = ({ children, fullWidth }) => (
  <>
    <Meta />
    <div className={styles.page}>
      <main className={styles['page-content']}>
        <div className={styles['page-app-bar']}>
          <AppBar />
        </div>
        <div
          className={`${styles['page-content-children']} ${
            fullWidth ? styles['is-full-width'] : ''
          }`}
        >
          {children}
        </div>
      </main>
      <ul className={styles['page-list']}>
        <li className={styles['page-item']}>🌿</li>
      </ul>
    </div>
  </>
)
