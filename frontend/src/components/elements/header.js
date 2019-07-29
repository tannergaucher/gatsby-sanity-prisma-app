import React from "react"
import Link from "gatsby-link"
import { Box } from "rebass"

// import { useSiteMetadata } from "../hooks"

export default function Header() {
  // const { siteMetadata } = useSiteMetadata()

  return (
    <Box as="header" bg="fuchsia">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          fontFamily: `var(--sans)`,
          color: "inherit",
        }}
      >
        Untrip
        {/* {siteMetadata.title} */}
      </Link>
    </Box>
  )
}
