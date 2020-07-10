import talks from 'data/talks'
import { ContentSection } from 'components/content-section'

export const TalksContentSection = () => (
  <ContentSection title="Palestras" list={talks} />
)
