import { ContentSection } from 'components/content-section'
import posts from 'data/posts'

export const PostContentSection = () => (
  <ContentSection title="Histórias e teorias" list={posts} />
)
