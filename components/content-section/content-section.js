import { H2 } from 'components/heading'
import { ArrowLink } from 'components/arrow-link'
import { ContentSectionList } from 'components/content-section-list'
import styles from './content-section.module.css'

export const ContentSection = ({ list, title, readMore }) => (
  <section className={styles['content-section']}>
    <div className={styles['content-section-title']}>
      <H2>{title}</H2>
      <span></span>
    </div>
    <ContentSectionList list={list.slice(0, 2)} />
    <ArrowLink href={readMore.href}>{readMore.text}</ArrowLink>
  </section>
)
