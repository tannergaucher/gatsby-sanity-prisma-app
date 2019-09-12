import React from "react"
import { Link } from "gatsby"

import { useAllSanityPost } from "../hooks"
import { PostCard } from "."

export default function posts() {
  const { edges } = useAllSanityPost()

  return (
    <>
      {edges.map(edge => (
        <Link
          to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
          style={{ textDecoration: `none`, color: `inherit` }}
        >
          <PostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </>
  )
}
