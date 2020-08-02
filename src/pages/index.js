import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Course from "../components/Course"

const Index = () => (
    <Layout title="siteTitle">
      <div className="course">
        <StaticQuery
          query={graphql`
          {
            allContentfulCourse (sort: {fields: slug}) {
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
                }
              }
            }
          }
        `}
          render={({
            allContentfulCourse: {
             edges
            }
            }) => (
            edges.map(({ node }) => (
              <Course key={node.slug} content={node} />
            ))
          )}
        />
      </div>
    </Layout>

)

export default Index