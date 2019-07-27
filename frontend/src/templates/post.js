import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import { PostTags, PostPlaces } from "../components/post"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <h1>{sanityPost.title}</h1>
      <PostTags tags={sanityPost.tags} />
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <BlockContent blocks={sanityPost._rawBody} />
      <PostPlaces postPlaces={sanityPost.postPlaces} />
    </>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
