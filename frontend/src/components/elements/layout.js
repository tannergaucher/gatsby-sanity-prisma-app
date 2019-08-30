import React from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"

import { Header, Footer } from "."
import "./layout.css"

export default function Layout({ children }) {
  return (
    <Box
      p={2}
      style={{
        margin: "0 auto",
        maxWidth: `var(--max-width)`,
      }}
    >
      <Header />
      <Box as="main" my={[4]} style={{ minHeight: `100vh` }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
