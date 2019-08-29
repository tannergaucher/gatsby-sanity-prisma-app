import React from "react"
import { Heading } from "rebass"

export default function CategoryTag({ pageContext }) {
  const { category, tag } = pageContext

  return (
    <>
      <Heading>{category}</Heading>
      <Heading>{tag}</Heading>
    </>
  )
}
