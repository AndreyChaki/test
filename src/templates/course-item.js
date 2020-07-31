import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CourseItemTemplate = ({ data }) => {
  const course = data.contentfulCourse
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title={course.title}
      />

      <h1>
        {course.title}
      </h1>
      <div>
        {course.author}
      </div>
      <div>
        <img src={course.image.fluid.src} alt=""/>
      </div>

    </Layout>
  )
}

export default CourseItemTemplate

export const pageQuery = graphql`
  query CourseItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCourse (slug: { eq: $slug }) {
      title
      author
      image {
        fluid (maxWidth:300, toFormat: WEBP) {
          src
        }
      }
    }
  }
`