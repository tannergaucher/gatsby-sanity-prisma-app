const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all posts and create post page for each. Query the post category for the URL.
  const postsQuery = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            id
            title
            slug {
              current
            }
            category {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  const posts = postsQuery.data.allSanityPost.edges || []

  posts.forEach(edge => {
    // create a slug of /:category/:post-title
    console.log(edge.node.category.slug)

    createPage({
      // TODO: create pages with /:category/:post-slug

      path: `${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // Query all sanity categories and create category template page for each.
  const categoriesQuery = await graphql(`
    query {
      allSanityCategory {
        edges {
          node {
            slug {
              current
            }
            category
          }
        }
      }
    }
  `)

  const categories = categoriesQuery.data.allSanityCategory.edges || []

  categories.forEach(edge => {
    createPage({
      path: edge.node.slug.current,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        slug: edge.node.slug.current,
        category: edge.node.category,
      },
    })
  })
}
