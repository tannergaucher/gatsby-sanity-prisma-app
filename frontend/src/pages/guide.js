import React from "react"
import { Heading, Box } from "rebass"

import { Categories } from "../components/category"

export default function Guide() {
  return (
    <Box px={[2]} my={[4]}>
      <Categories />
    </Box>
  )
}
