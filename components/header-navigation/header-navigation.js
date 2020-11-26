import { useState } from 'react'
import { HamburgerButton } from 'components/hamburger-button'
import { Navigation } from 'components/navigation'
import styles from './header-navigation.module.css'

export const HeaderNavigation = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false)

  const toggleNavigation = () => {
    setIsNavigationOpened(!isNavigationOpened)
  }

  return (
    <header className={styles['header-navigation']}>
      <div className={styles['hamburguer-button']}>
        <HamburgerButton onClick={toggleNavigation} />
      </div>
      <div
        className={`${styles['navigation']} ${
          isNavigationOpened ? styles['is-opened'] : ''
        }`}
      >
        <Navigation />
      </div>
    </header>
  )
}
