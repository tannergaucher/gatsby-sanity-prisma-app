import React, { useState } from "react"
import { Menu as MenuIcon } from "grommet-icons"
import { Link } from "gatsby"
import { Layer } from "grommet"
import { Heading, Flex } from "rebass"
import { Close } from "grommet-icons"

export default function Menu() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>
        <MenuIcon color="var(--dark-1)" />
      </button>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          onClickCapture={() => setShow(false)}
          full={true}
        >
          <Flex p={[2]} bg="var(--light-1)" flexDirection="column" flex={1}>
            <Flex justifyContent="space-between">
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                  color: `inherit`,
                }}
              >
                <Heading
                  fontSize={[3]}
                  fontWeight="lighter"
                  color="var(--dark-1)"
                >
                  Untrip
                </Heading>
              </Link>
              <button onClick={() => setShow(false)}>
                <Close color="var(--dark-1)" />
              </button>
            </Flex>
            <MenuNav />
          </Flex>
        </Layer>
      )}
    </>
  )
}

function MenuNav() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="var(--light-1)"
      flex={1}
    >
      <MenuNavItem text="Home" to="/" />
      <MenuNavItem text="Guide" to="guide" />
      {/* Dont' display if not logged in */}
      {/* <MenuNavItem text="Untrips" to="/lists" /> */}
      {/* Query isLoggedIn and disply sign up or sign in */}
      <MenuNavItem text="Sign In" to="/signin" />
    </Flex>
  )
}

const MenuNavItem = ({ text, to }) => (
  <Link to={to} color="inherit" style={{ textDecoration: `none` }}>
    <Heading
      my={[4]}
      fontSize={[5]}
      color="var(--dark-1)"
      style={{ textTransform: `uppercase` }}
      fontFamily="var(--sans)"
      fontWeight="900"
    >
      {text}
    </Heading>
  </Link>
)
