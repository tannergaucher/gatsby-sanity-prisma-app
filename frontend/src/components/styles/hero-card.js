import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "rebass"

export default function HeroCard({ text, fluid }) {
  return (
    <Box mb={[3]} style={{ position: `relative` }}>
      <Heading
        color="var(--light-1)"
        fontSize={[4]}
        fontFamily="var(--sans)"
        fontWeight="400"
        style={{
          zIndex: `1`,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          textTransform: `uppercase`,
          textAlign: `center`,
        }}
      >
        {text}
      </Heading>
      <Img
        fluid={fluid}
        style={{
          filter: `brightness(.5)`,
          height: "300px",
        }}
      />
    </Box>
  )
}
