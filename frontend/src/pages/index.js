import React from "react"
import { Box } from "rebass"

import { SEO } from "../components/elements"
import { Posts } from "../components/post"

const IndexPage = () => (
  <Box px={[2]} my={[4]}>
    <SEO title="Home" />
    <Posts />
  </Box>
)

export default IndexPage
