import styles from './heading.module.css'

export const H1 = ({ children }) => (
  <h1 className={styles['heading-h1']}>{children}</h1>
)

export const H3 = ({ children }) => (
  <h3 className={styles['heading-h3']}>{children}</h3>
)
