import { Summary } from 'components/summary'
import styles from './content-section.module.css'

export const ContentSection = ({ list, title }) => (
  <section className={styles['content-section']}>
    <h2 className={styles['content-section-title']}>{title}</h2>
    <ul className={styles['content-section-list']}>
      {list.map(item => (
        <li key={item.id} className={styles['content-section-item']}>
          <Summary
            category={item.category}
            date={item.date}
            href={item.href}
            title={item.title}
          />
        </li>
      ))}
    </ul>
  </section>
)
