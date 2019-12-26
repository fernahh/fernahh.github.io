import { Link as NextLink } from 'next/link'
import { useTheme } from '../hooks/useTheme'

export const Link = ({ href, title, children, ...props }) => {
  const { colors } = useTheme()

  return (
    <span>
      {isAbsUrl(href) ? (
        <a href={href} title={title} target="_blank" {...props}>
          {children}
        </a>
      ) : (
        <NextLink href={href} title={title} prefetch {...props}>
          <a>{children}</a>
        </NextLink>
      )}

      <style jsx>{`
        a {
          display: inline-block;
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
