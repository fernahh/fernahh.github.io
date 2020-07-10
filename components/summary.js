import css from 'styled-jsx/css'
import { Link } from 'components/link'
import { Time } from 'components/time'
import { useTheme } from 'hooks/useTheme'

export const Summary = ({ category, date, href, title }) => {
  const { fontSizes, sizes } = useTheme()

  const { className, styles } = css.resolve`
    a {
      display: block;
      margin: 0;
      font-size: ${fontSizes.base};
      text-decoration: none;
      box-sizing: border-box;
    }
  `

  return (
    <>
      <div>
        <Link
          className={className}
          href={href || 'http://www.google.com'}
          title={`Link para ${title}`}
        >
          {title}
        </Link>
        <Time category={category} date={date} />
        {styles}
      </div>
      <style jsx>{`
        div {
          margin-bottom: ${sizes.small};
        }
      `}</style>
    </>
  )
}
