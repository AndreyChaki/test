const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const courseItem = path.resolve(`./src/templates/course-item.js`)
  const result = await graphql(
    `
      {
        allContentfulCourse {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create course pages.
  const courses = result.data.allContentfulCourse.edges

  courses.forEach((course) => {

    createPage({
      path: course.node.slug,
      component: courseItem,
      context: {
        slug: course.node.slug,
      },
    })
  })
}
