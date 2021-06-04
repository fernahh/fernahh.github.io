import { Summary } from 'components/summary'
import styles from './content-section-list.module.css'

export const ContentSectionList = ({ list }) => (
  <ul className={styles['content-section-list']}>
    {list.map((item) => (
      <li key={item.id} className={styles['content-section-item']}>
        <Summary
          category={item.category}
          date={item.date}
          href={item.href}
          title={item.title}
          description={item.description}
        />
      </li>
    ))}
  </ul>
)
