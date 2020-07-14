import React from "react"
import Layout from '../components/layout/index'
import SEO from '../components/seo/index'
import Hero from '../components/hero/index'
import Text from '../components/text/index'
import Timeline from '../components/timeline/index'

export default function Home() {
  return (
    <Layout>
      <SEO title="About Ankit Gupta" description="Technologist with over 13 years of experience" />
      <Hero 
      heroheading = "Ankit Gupta"/>
      <Timeline
      logo = 'http://localhost:8000/img/ankit_avatar.png'
      alttext = 'Ankit Gupta Avatar'
      excerpt = 'I am from New Delhi'
      />
    </Layout>
  )
}
