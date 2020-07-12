import { Banner } from 'components/banner'
import { PostContentSection } from 'components/post-content-section'
import { TalksContentSection } from 'components/talks-content-section'
import { Page } from 'layouts/page'

const Index = () => (
  <Page>
    <Banner />
    <PostContentSection />
    <TalksContentSection />
  </Page>
)

export default Index
