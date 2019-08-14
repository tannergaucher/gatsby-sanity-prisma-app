import React from "react"
import { Box, Heading } from "rebass"

import { Link } from "../styles"
// import { useSiteMetadata } from "../hooks"

export default function Header() {
  // const { title } = useSiteMetadata()

  return (
    <Box as="header">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Heading fontSize={[3]} fontWeight="lighter">
          {/*GATSBY BUG: NOT WORKING IN DEV  {title} */}
          Untrip
        </Heading>
      </Link>
    </Box>
  )
}
