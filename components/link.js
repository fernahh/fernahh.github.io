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
          text-decoration: none;
          border-bottom: 1px dashed ${colors.link};
          transition: all 200ms ease-in-out;
        }

        a:hover {
          color: ${colors.linkHover};
          border-bottom-color: ${colors.linkHover};
          border-bottom-style: solid;
        }
      `}</style>
    </span>
  )
}

function isAbsUrl(url) {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)
}
