import { graphql } from "gatsby"

export const SANITY_POST_FRAGMENT = graphql`
  fragment SanityPostFragment on SanityPost {
    id
    _rawBody
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
    postPlaces {
      _rawText
      place {
        ...SanityPlaceFragment
      }
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

export const SANITY_PLACE_FRAGMENT = graphql`
  fragment SanityPlaceFragment on SanityPlace {
    id
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
    imageCaption
    imageCredit
    imageLink
    name
    slug {
      current
    }
    placeTypes {
      tag
    }
    facebookLink
    instagramLink
    twitterLink
    websiteLink
    phoneNumber
    location {
      lat
      lng
    }
  }
`
