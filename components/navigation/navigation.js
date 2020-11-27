import { NavigationList } from 'components/navigation-list'
import { NavigationItem } from 'components/navigation-item'
import { NavigationLink } from 'components/navigation-link'
import styles from './navigation.module.css'

export const Navigation = () => (
  <nav className={styles.navigation}>
    <NavigationList>
      <NavigationItem>
        <NavigationLink href="/">experiência</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink as="/textos" href="/stories">
          textos
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
    </NavigationList>
  </nav>
)