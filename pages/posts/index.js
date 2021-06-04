import posts from 'data/posts'
import { ContentSectionList } from 'components/content-section-list'
import { Page } from 'components/page'
import { PageHeader } from 'components/page-header'

const Posts = () => (
  <Page>
    <PageHeader
      title="Posts"
      description="Relatos, ideias e opiniões do que penso sobre desenvolvimento de software."
    />
    <section>
      <ContentSectionList list={posts} />
    </section>
  </Page>
)

export default Posts
