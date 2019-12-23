import { Link as NextLink } from 'next/link'
import { useTheme } from '../hooks/useTheme'

export const Link = ({ href, title, children }) => {
  const { colors } = useTheme()

  return (
    <span>
      {isAbsUrl(href) ? (
        <a href={href} title={title} target="_blank">
          {children}
        </a>
      ) : (
        <NextLink href={href} title={title} prefetch>
          <a>{children}</a>
        </NextLink>
      )}

      <style jsx>{`
        a {
          color: ${colors.link};
          text-decoration: underline;
        }

        a:hover,
        &:focus {
          color: ${colors.linkHover};
        }
      `}</style>
    </span>
  )
}

function isAbsUrl(url) {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)
}
