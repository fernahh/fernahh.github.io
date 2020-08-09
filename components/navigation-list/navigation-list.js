import styles from './navigation-list.module.css'

export const NavigationList = ({ children }) => (
  <ul className={styles['navigation-list']} role="menubar">
    {children}
  </ul>
)
