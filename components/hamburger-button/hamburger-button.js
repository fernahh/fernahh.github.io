import { ScreenReaderOnly } from 'components/screen-reader-only'
import styles from './hamburger-button.module.css'

export const HamburgerButton = ({ onClick }) => (
  <button className={styles['hamburguer-button']} onClick={onClick}>
    <ScreenReaderOnly>Abrir menu</ScreenReaderOnly>
  </button>
)
