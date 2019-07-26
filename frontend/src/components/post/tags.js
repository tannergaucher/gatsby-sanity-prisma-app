import React from "react"

export default function Tags({ tags }) {
  return (
    <>
      {tags.map(tag => (
        <div key={tag.id}>
          <h4>{tag.tag}</h4>
        </div>
      ))}
    </>
  )
}
