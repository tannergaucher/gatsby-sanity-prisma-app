import React from "react"
import { Heading } from "rebass"
import { Link } from "../styles"

export default function Tags({ tags }) {
  return (
    <>
      {tags.map(tag => (
        <Link key={tag.id} to={tag.slug.current}>
          <Heading fontSize={[2]} fontWeight="lighter">
            {tag.tag}
          </Heading>
        </Link>
      ))}
    </>
  )
}
