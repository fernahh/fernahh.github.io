import NextLink from 'next/link'
import styles from './link.module.css'

export const Link = ({ href, title, children, ...props }) => (
  <>
    {isAbsUrl(href) ? (
      <a
        className={styles.link}
        href={href}
        title={title}
        target="_blank"
        {...props}
      >
        {children}
      </a>
    ) : (
      <NextLink
        className={styles.link}
        href={href}
        title={title}
        prefetch
        {...props}
      >
        <a>{children}</a>
      </NextLink>
    )}
  </>
)

function isAbsUrl(url) {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)
}
