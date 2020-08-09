import styles from './screen-reader-only.module.css'

export const ScreenReaderOnly = ({ children }) => (
  <div className={styles['screen-reader-only']}>{children}</div>
)
