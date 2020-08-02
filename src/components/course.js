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
    },
    child
  }
  }) => (
  <article className='courseItem' key={slug}>
    <div>
      <Link to={slug}>
        {title}
      </Link>
    </div>
    <div>
      Количество уроков: {child.length}
    </div>
    <div>
      Автор: {author}
    </div>
    <div>
      <Img fluid={GatsbyContentfulFluid} />
    </div>
  </article>
)

export default Course
