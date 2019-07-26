import React from "react"

import { useAllSanityPost } from "../hooks"
import { Post } from "."

export default function posts() {
  const { edges } = useAllSanityPost()

  return (
    <>
      {edges.map(edge => (
        <Post key={edge.node.id} post={edge.node} />
      ))}
    </>
  )
}
