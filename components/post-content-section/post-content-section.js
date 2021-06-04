import { ContentSection } from 'components/content-section'
import posts from 'data/posts'

export const PostContentSection = () => (
  <ContentSection
    title="posts"
    list={posts}
    readMore={{
      href: '/posts',
      text: 'Acesse todos os posts',
    }}
  />
)
