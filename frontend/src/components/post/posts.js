import React from "react"
import { Link } from "gatsby"

import { useAllSanityPost } from "../hooks"
import { ImageCard, PostCard } from "."

export default function posts() {
  const { edges } = useAllSanityPost()

  return (
    <>
      {edges.map(
        edge =>
          console.log(edge) || (
            <Link style={{ textDecoration: `none`, color: `inherit` }}>
              <PostCard key={edge.node.id} post={edge.node} />
            </Link>
          )
      )}
    </>
  )
}
