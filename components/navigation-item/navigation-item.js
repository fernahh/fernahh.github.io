import styles from './navigation-item.module.css'

export const NavigationItem = ({ children }) => (
  <li className={styles['navigation-item']} role="none">
    {children}
  </li>
)
