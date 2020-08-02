import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LessonPageTemplate = ({ data }) => {
  const lessonTitle = data.contentfulCourse.child.title
  const content = data.contentfulCourse.child.content
  const siteTitle = data.site.siteMetadata.title


  return (
    <Layout title={siteTitle}>
      <SEO title={lessonTitle} />

      <h1>
        {lessonTitle}
      </h1>

      <Link to={data.contentfulCourse.slug}>
        Назад
      </Link>

      <article className='article'>
        {content}
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
    contentfulCourse (slug: { eq: $slug }) {
      slug
      child {
        title
        slug
        content {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`