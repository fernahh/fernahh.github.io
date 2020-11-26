import { HeaderNavigation } from 'components/header-navigation'
import { Logo } from 'components/logo'
import styles from './app-bar.module.css'

export const AppBar = () => (
  <div className={styles['app-bar']}>
    <Logo />
    <HeaderNavigation />
  </div>
)
