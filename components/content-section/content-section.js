import { Summary } from 'components/summary'
import { H2 } from 'components/heading'
import styles from './content-section.module.css'

// DIVIDIR posts em outra coluna
export const ContentSection = ({ list, resume, title }) => (
  <section className={styles['content-section']}>
    <H2>{title}</H2>
    <p className={styles['content-section-resume']}>{resume}</p>
    <ul className={styles['content-section-list']}>
      {list.map((item) => (
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
