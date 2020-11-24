import { ContentSection } from 'components/content-section'
import stories from 'data/stories'

export const PostContentSection = () => (
  <ContentSection
    title="Ensaios"
    list={stories}
    resume="Breves reflexões sobre software através de pensamentos livres de um desenvolvedor."
  />
)
