import { useState } from 'react'
import { HamburgerButton } from 'components/hamburger-button'
import { Navigation } from 'components/navigation'
import styles from './header.module.css'

export const Header = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false)

  const toggleNavigation = () => {
    setIsNavigationOpened(!isNavigationOpened)
  }

  return (
    <header className={styles.header}>
      <div className={styles['hamburguer-button']}>
        <HamburgerButton onClick={toggleNavigation} />
      </div>
      <div
        className={`${styles['header-navigation']} ${
          isNavigationOpened ? styles['is-opened'] : ''
        }`}
      >
        <Navigation />
      </div>
    </header>
  )
}
