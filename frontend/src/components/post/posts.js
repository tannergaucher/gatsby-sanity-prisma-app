import React from "react"

import { useAllSanityPost } from "../hooks"
import { PostCard } from "."

export default function posts() {
  const { edges } = useAllSanityPost()

  return (
    <>
      {edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
    </>
  )
}
