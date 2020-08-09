import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navigation-link.module.css'

export const NavigationLink = ({ as, href, children }) => {
  const router = useRouter()

  return (
    <Link as={as} href={href}>
      <a
        role="menuitem"
        className={`${styles['navigation-link']} ${
          router.pathname === href ? styles['is-active'] : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}
