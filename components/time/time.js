import styles from './time.module.css'

export const Time = ({ date, category }) => (
  <time className={styles.time} dateTime={date}>
    {category && <span>{category},</span>} {buildDate(date)}
  </time>
)

function buildDate(date) {
  const currentDate = new Date(date)
  const month = currentDate.toLocaleString('pt-BR', { month: 'short' })
  const year = currentDate.toLocaleString('pt-BR', { year: 'numeric' })

  return `${month} ${year}`
}
