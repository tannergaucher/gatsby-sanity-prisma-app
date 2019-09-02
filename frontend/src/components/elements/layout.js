import React from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { Header, Footer } from "."
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import "./layout.css"

export default function Layout({ children }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

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
