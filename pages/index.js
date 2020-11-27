import { Banner } from 'components/banner'
import { Page } from 'components/page'
import { PostContentSection } from 'components/post-content-section'
import { TalksContentSection } from 'components/talks-content-section'

const Index = () => (
  <Page fullWidth>
    <Banner />
    <PostContentSection />
    <TalksContentSection />
  </Page>
)

export default Index
