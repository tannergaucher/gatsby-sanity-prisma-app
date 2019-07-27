import React from "react"

import { useAllSanityTag } from "../components/hooks"

export default function Tags() {
  const { edges } = useAllSanityTag()

  return (
    <>
      <h1>Tags</h1>
      {edges.map(edge => (
        //Replace with <Tag/>
        <div key={edge.node.id}>
          <h2>{edge.node.tag}</h2>
        </div>
      ))}
    </>
  )
}
