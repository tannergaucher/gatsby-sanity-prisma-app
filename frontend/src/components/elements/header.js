import React from "react"
import { Flex, Heading } from "rebass"

import { Link } from "../styles"
import { Menu } from "."

// THIS HOOK ERRORS IN DEV MODE
// import { useSiteMetadata } from "../hooks"

export default function Header() {
  // const { title } = useSiteMetadata()

  return (
    <Flex as="header" justifyContent="space-between">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Heading
          fontSize={[3]}
          fontWeight="lighter"
          fontFamily="var(--sans)"
          style={{ textDecoration: `uppercase` }}
        >
          {/*GATSBY BUG: NOT WORKING IN DEV  {title} */}
          Untrip
        </Heading>
      </Link>
      <Menu />
    </Flex>
  )
}
