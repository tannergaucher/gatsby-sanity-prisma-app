const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all posts and create post page for each.
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
          }
        }
      }
    }
  `)

  const posts = postsQuery.data.allSanityPost.edges || []

  posts.forEach(edge => {
    createPage({
      path: edge.node.slug.current,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  //Query all authors and create author page for each.
  const authorsQuery = await graphql(`
    query {
      allSanityAuthor {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const authors = authorsQuery.data.allSanityAuthor.edges || []

  authors.forEach(edge => {
    createPage({
      path: edge.node.slug.current,
      component: path.resolve(`./src/templates/author.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // Query all tags and create tag page for each.
  const tagsQuery = await graphql(`
    query {
      allSanityTag {
        edges {
          node {
            tag
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const tags = tagsQuery.data.allSanityTag.edges || []

  tags.forEach(edge => {
    createPage({
      path: edge.node.slug.current,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        slug: edge.node.slug.current,
        tag: edge.node.tag,
      },
    })
  })
}
