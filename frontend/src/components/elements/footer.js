import React from "react"
import { Box, Heading } from "rebass"

import { Link } from "../styles"

export default function Footer() {
  return (
    <Box as="footer">
      <Link to="/">
        <Heading fontSize={[3]} style={{ fontWeight: `lighter` }}>
          Untrip
        </Heading>
      </Link>
    </Box>
  )
}
