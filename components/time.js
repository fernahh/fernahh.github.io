import { Fragment } from 'react'
import { useTheme } from '../hooks/useTheme'

export const Time = ({ date, category }) => {
  const { colors } = useTheme()

  return (
    <Fragment>
      <time dateTime={date}>
        <span>{category}</span>, {buildDate(date)}
      </time>
      <style jsx>
        {`
          time,
          span {
            color: ${colors.grey};
            font-size: 14px;
            text-decoration: underline;
            text-decoration-color: ${colors.white};
            text-transform: capitalize;
          }
        `}
      </style>
    </Fragment>
  )
}

function buildDate(date) {
  const currentDate = new Date(date)
  const month = currentDate.toLocaleString('pt-BR', { month: 'short' })
  const year = currentDate.toLocaleString('pt-BR', { year: 'numeric' })

  return `${month} ${year}`
}
