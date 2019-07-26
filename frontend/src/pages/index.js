import React from "react"

import { Layout, SEO } from "../components/elements"
import { Posts } from "../components/post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts />
  </Layout>
)

export default IndexPage
