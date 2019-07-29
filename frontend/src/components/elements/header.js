import React from "react"
import { Box, Heading } from "rebass"

import { Link } from "../styles"

// import { useSiteMetadata } from "../hooks"

export default function Header() {
  // const { siteMetadata } = useSiteMetadata()

  return (
    <Box as="header">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Heading fontSize={[3]} style={{ fontWeight: `lighter` }}>
          Untrip
        </Heading>
        {/* {siteMetadata.title} */}
      </Link>
    </Box>
  )
}
