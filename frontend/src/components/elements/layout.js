import React from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"

import { Header, Footer } from "."
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Box
      p={2}
      style={{
        maxWidth: `var(--max-width)`,
        margin: "0 auto",
      }}
    >
      <Header />
      <Box as="main" my={[4]}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
