import { useState } from 'react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { Navigation } from 'components/navigation'
import styles from './header.module.css'

export const Header = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false)

  const toggleNavigation = () => {
    setIsNavigationOpened(!isNavigationOpened)
  }

  return (
    <div className={styles['header']}>
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <Logo />
        </div>
        <div className={styles['header-hamburguer-button']}>
          <HamburgerButton onClick={toggleNavigation} />
        </div>
        <div
          className={`${styles['header-navigation']} ${
            isNavigationOpened ? styles['is-open'] : ''
          }`}
        >
          <Navigation />
        </div>
      </div>
    </div>
  )
}
