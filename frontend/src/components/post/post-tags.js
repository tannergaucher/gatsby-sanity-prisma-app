import React from "react"
import { Flex } from "rebass"

// Rename to PlaceTags
// Move to /components/place directory

export default function PostTags({ tags }) {
  return (
    <Flex justifyContent="center" bg="pink">
      {tags.map(tag => (
        <button key={tag.id}>
          <h4>{tag.tag}</h4>
        </button>
      ))}
    </Flex>
  )
}
