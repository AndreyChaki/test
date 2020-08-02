import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LessonPageTemplate = ({ data }) => {
  const lessonTitle = data.contentfulLesson.title
  const siteTitle = data.site.siteMetadata.title


  return (
    <Layout title={siteTitle}>
      <SEO title={lessonTitle} />

      <Link to='./../'>
        Назад
      </Link>

      <h1>
        {lessonTitle}
      </h1>


      <article className='article'>
        {documentToReactComponents(data.contentfulLesson.content.json)}
      </article>

    </Layout>
  )
}

export default LessonPageTemplate

export const pageQuery = graphql`
  query LessonItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLesson (slug: { eq: $slug }) {
      title
      slug
      content{
        json
      }
    }
  }
`