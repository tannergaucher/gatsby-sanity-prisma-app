import { graphql } from "gatsby"

export const SANITY_POST_FRAGMENT = graphql`
  fragment SanityPostFragment on SanityPost {
    id
    title
    slug {
      current
    }
    mainImage {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
    author {
      ...SanityAuthorFragment
    }
    tags {
      ...SanityTagFragment
    }
  }
`

export const SANITY_AUTHOR_FRAGMENT = graphql`
  fragment SanityAuthorFragment on SanityAuthor {
    id
    name
    slug {
      current
    }
    image {
      asset {
        fixed(width: 50) {
          ...GatsbySanityImageFixed
        }
      }
    }
  }
`

export const SANITY_TAG_FRAGMENT = graphql`
  fragment SanityTagFragment on SanityTag {
    id
    tag
    slug {
      current
    }
  }
`
