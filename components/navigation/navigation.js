import { NavigationList } from 'components/navigation-list'
import { NavigationItem } from 'components/navigation-item'
import { NavigationLink } from 'components/navigation-link'
import styles from './navigation.module.css'

export const Navigation = () => (
  <nav className={styles.navigation}>
    <NavigationList>
      <NavigationItem>
        <NavigationLink href="/">Página inicial</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink as="/ensaios" href="/stories">
          Ensaios
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink as="/palestras" href="/talks">
          Palestras
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink as="/sobre" href="/about">
          Sobre
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink as="/contato" href="/contact">
          Contato
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  </nav>
)
