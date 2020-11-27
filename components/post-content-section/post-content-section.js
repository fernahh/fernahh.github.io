import { ContentSection } from 'components/content-section'
import posts from 'data/posts'

export const PostContentSection = () => (
  <ContentSection
    title="Textos"
    list={posts}
    readMore={{
      href: 'https://google.com',
      text: 'Acesse todos os textos',
    }}
  />
)
