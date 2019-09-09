import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { Header, Footer } from "."
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import "./layout.css"

function isPost(location) {
  return location.pathname.split("/")[1] === "posts"
}

export default function Layout({ children, location }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return isPost(location) ? (
    <WithoutHeader children={children} />
  ) : (
    <WithHeader children={children} />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

function WithHeader({ children }) {
  return (
    <Box
      p={[2]}
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

function WithoutHeader({ children }) {
  return (
    <Box
      style={{
        margin: "0 auto",
        maxWidth: `var(--max-width)`,
        position: `relative`,
        top: `0`,
      }}
    >
      <Box
        style={{
          position: `absolute`,
          top: `0`,

          zIndex: `3`,
          height: `100%`,
        }}
      >
        <Link to="/">
          <button style={{ position: `sticky`, top: `0`, right: `0` }}>
            X
          </button>
        </Link>
      </Box>
      <Box as="main" style={{ minHeight: `100vh` }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
