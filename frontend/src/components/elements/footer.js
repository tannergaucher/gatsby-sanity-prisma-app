import React from "react"
import { Box } from "rebass"

import { Link } from "../styles"

export default function Footer() {
  return (
    <Box as="footer" bg="lime">
      <Link to="/">Untrip</Link>
    </Box>
  )
}
