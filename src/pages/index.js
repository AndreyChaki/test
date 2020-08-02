import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const courses = data.allContentfulCourse.edges


  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />

      <div className='course'>
        {courses.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article className='courseItem' key={node.slug}>
              <div>
                <Link to={node.slug}>
                  {title}
                </Link>
              </div>
              <div>
                Автор: {node.author}
              </div>
              <div>
                Количество уроков: {node.child.length}
              </div>
              <div>
                <Img fluid={node.image.fluid} />
              </div>
            </article>
          )
        })}
      </div>

    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCourse {
      edges {
        node {
          slug
          title
          author
          image {
            fluid (toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
          child {
            id
          }
        }
      }
    }
  }
`
