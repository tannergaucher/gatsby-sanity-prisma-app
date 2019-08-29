import React, { useState } from "react"
import { Select } from "grommet"

export default function CategoryTagsSelect({ tags }) {
  const [value, setValue] = useState("All")

  return (
    <>
      <label htmlFor="tag-select">Filter by Tag:</label>
      <select id="tag-select">
        <option value="/">All</option>
        {tags.map(tag => (
          <option
            value={tag.slug.current}
            onSelect={e => {
              console.log(e)
            }}
          >
            {tag.tag}
          </option>
        ))}
      </select>
    </>
  )
}
