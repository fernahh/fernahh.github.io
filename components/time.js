import { useTheme } from 'hooks/useTheme'

export const Time = ({ date, category }) => {
  const { colors, fontSizes } = useTheme()

  return (
    <>
      <time dateTime={date}>
        {category && <span>{category},</span>} {buildDate(date)}
      </time>
      <style jsx>
        {`
          time,
          span {
            color: ${colors.grey};
            font-size: ${fontSizes.extraSmall};
            text-decoration: underline;
            text-decoration-color: ${colors.white};
            text-transform: capitalize;
          }
        `}
      </style>
    </>
  )
}

function buildDate(date) {
  const currentDate = new Date(date)
  const month = currentDate.toLocaleString('pt-BR', { month: 'short' })
  const year = currentDate.toLocaleString('pt-BR', { year: 'numeric' })

  return `${month} ${year}`
}
