import styles from './paragraph.module.css'

export const P = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
)
