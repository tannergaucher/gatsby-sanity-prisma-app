import React from "react"
import { Previous } from "grommet-icons"
import { Flex, Heading } from "rebass"

import { Link } from "../styles"
import { Menu } from "."

export default function Header({ location }) {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      bg="var(--light-1)"
      p={[2]}
      opacity=".92"
    >
      <button
        onClick={e => {
          e.preventDefault()
          window.history.back()
        }}
      >
        <Previous
          color="var(--dark-3)"
          style={{
            visibility: location.pathname === "/" ? "hidden" : "visible",
          }}
        />
      </button>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Heading fontSize={[3]} fontWeight="lighter" color="var(--dark-3)">
          Untrip
        </Heading>
      </Link>
      <Menu />
    </Flex>
  )
}
