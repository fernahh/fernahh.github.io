import styles from './time.module.css'

export const Time = ({ date }) => (
  <time className={styles.time} dateTime={date}>
    Updated at{' '}
    <span style={{ textTransform: 'capitalize' }}>{buildDate(date)}</span>
  </time>
)

function buildDate(date) {
  const currentDate = new Date(date)
  const month = currentDate.toLocaleString('pt-BR', { month: 'short' })
  const year = currentDate.toLocaleString('pt-BR', { year: 'numeric' })

  return `${month} ${year}`
}
