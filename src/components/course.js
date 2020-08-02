import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Course = ({
  content: {
    title,
    slug,
    author,
    image: {
      fluid: {
        ...GatsbyContentfulFluid
      }
    }
  }
  }) => (
  <article className='courseItem' key={slug}>
    <div>
      <Link to={slug}>
        {title}
      </Link>
    </div>
    <div>
      {author}
    </div>
    <div>
      <Img fluid={GatsbyContentfulFluid} />
    </div>
  </article>
)

export default Course
