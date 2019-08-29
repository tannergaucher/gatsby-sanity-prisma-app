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
            tags {
              tag
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

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

  const posts = postsQuery.data.allSanityPost.edges || []
  const categories = categoriesQuery.data.allSanityCategory.edges || []
  const categoriesWithTags = []

  categories.forEach(category => {
    categoriesWithTags.push({
      ...category.node,
      tags: [],
    })
  })

  posts.forEach(post => {
    categoriesWithTags.forEach(categoryWithTags => {
      if (post.node.category.slug.current === categoryWithTags.slug.current) {
        post.node.tags.map(tag => {
          if (categoryWithTags.tags.indexOf(tag === -1)) {
            categoryWithTags.tags.push(tag)
          }
        })
      }
    })
  })

  posts.forEach(edge => {
    createPage({
      path: `${edge.node.category.slug.current}/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

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

  categoriesWithTags.forEach(edge => {
    edge.tags.forEach(tag => {
      createPage({
        path: `${edge.slug.current}/${tag.slug.current}`,
        component: path.resolve(`./src/templates/category-tag.js`),
        context: {
          category: edge.category,
          categorySlug: edge.slug.current,
          tag: tag.tag,
          tagSlug: tag.slug.current,
        },
      })
    })
  })
}
