import posts from '../data/posts'
import { ContentSection } from './content-section'

export const PostContentSection = () => (
  <ContentSection title="Histórias e teorias" list={posts} />
)
