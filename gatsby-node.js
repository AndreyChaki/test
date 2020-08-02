const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const coursePage = path.resolve(`./src/templates/CoursePage.js`)
  const lessonPage = path.resolve(`./src/templates/LessonPage.js`)
  const result = await graphql(
    `
      {
        allContentfulCourse {
          edges {
            node {
              slug
              child {
                slug
              }
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
      component: coursePage,
      context: {
        slug: course.node.slug,
      },
    })

    course.node.child.forEach((lesson) => {
      createPage({
        path: `/${course.node.slug}/${lesson.slug}`,
        component: lessonPage,
        context: {
          slug: lesson.slug,
        },
      })

    })
  })
}
