import { Banner } from 'components/banner'
import { Page } from 'components/page'
import { PostContentSection } from 'components/post-content-section'
import { TalksContentSection } from 'components/talks-content-section'
import { NewsletterForm } from 'components/newsletter-form'

const Index = () => (
  <Page fullWidth>
    <Banner />
    <PostContentSection />
    <TalksContentSection />
    <NewsletterForm />
  </Page>
)

export default Index
