import { Fragment } from 'react'
import css from 'styled-jsx/css'
import { useTheme } from '../hooks/useTheme'
import { H3 } from './heading'
import { Link } from './link'
import { Time } from './time'

export const Summary = ({ category, date, title }) => {
  const { colors, sizes } = useTheme()

  const { className, styles } = css.resolve`
    a {
      margin: 0;
      box-sizing: border-box;
      color: ${colors.black};
      text-decoration: underline;
      text-decoration-color: ${colors.white};
    }

    a:hover {
      color: ${colors.black};
    }
  `

  return (
    <Fragment>
      <div>
        <Link
          className={className}
          href="http://www.google.com"
          title={`Link para ${title}`}
        >
          <H3>{title}</H3>
          <Time category={category} date={date} />
        </Link>
        {styles}
      </div>
      <style jsx>{`
        div {
          margin-bottom: ${sizes.small};
        }
      `}</style>
    </Fragment>
  )
}
