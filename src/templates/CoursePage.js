import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const CoursePageTemplate = ({ data }) => {
  const courseTitle = data.contentfulCourse.title
  const lessons = data.contentfulCourse.child
  const siteTitle = data.site.siteMetadata.title


  return (
    <Layout title={siteTitle}>
      <SEO title={courseTitle} />

      <Link to='/'>
        Назад
      </Link>

      <h1>
        {courseTitle}
      </h1>

      <div className='lessonsList'>
        { lessons == null ? 'Нет уроков' :
          lessons.map(( node ) => {
          return (
            <article className='lessonItem' key={node.slug}>
              <Img fluid={node.image.fluid} />
              <Link to={node.slug}>
                {node.title}
              </Link>
              <div>
                {node.description}
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default CoursePageTemplate

export const pageQuery = graphql`
  query CourseItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCourse (slug: { eq: $slug }) {
      title
      child {
        title
        slug
        description
        image {
          fluid (toFormat: WEBP) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`