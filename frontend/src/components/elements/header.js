import { Link } from "gatsby"
import React from "react"

import { useSiteMetadata } from "../hooks"

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <header>
      <>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </>
    </header>
  )
}
