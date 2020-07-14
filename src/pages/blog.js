import React from 'react'
import Layout from '../components/layout/index'
import Timeline from '../components/timeline/index'

export default function Blog() {
    return (
        <Layout>
            <h1>Blog</h1>
            <h1>What I have done so far</h1>
      <Timeline 
      logo="http://localhost:8000/static/img/LBG.png"
      alttext="Lloyd Banking Group, UK"
      companyname="LBG"
      excerpt="Worked as Engineering Lead. Did this , did that. blah blah"
      />
      <Timeline 
      logo="http://localhost:8000/static/img/GCP.png"
      alttext="GCP Certifed Architect"
      companyname="Google Cloud Certified Professional Architect"
      excerpt="Certified Cloud Architect"
      />
      <Timeline 
      logo="http://localhost:8000/static/img/PS.png"
      alttext="Publicis Sapient"
      companyname="Publicis Sapient"
      excerpt="13 years work experience, Distinguished Engineer"
      />
        </Layout>
    )
  } 