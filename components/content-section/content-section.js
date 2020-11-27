import { Summary } from 'components/summary'
import { H2 } from 'components/heading'
import { ArrowLink } from 'components/arrow-link'
import styles from './content-section.module.css'

export const ContentSection = ({ list, title, readMore }) => (
  <section className={styles['content-section']}>
    <H2>{title}</H2>
    <ul className={styles['content-section-list']}>
      {list.slice(0, 3).map((item) => (
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
    <ArrowLink href={readMore.href}>{readMore.text}</ArrowLink>
  </section>
)
