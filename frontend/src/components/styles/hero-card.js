import React from "react"
import Img from "gatsby-image"
import { Card, Heading } from "rebass"

export default function HeroCard({ text, fluid }) {
  return (
    <Card
      mb={[3]}
      boxShadow="0px 10px 12px rgba(0, 0, 0, .2)"
      borderRadius="25px"
      style={{ position: `relative` }}
    >
      <Heading
        color="var(--light-1)"
        fontSize={[4]}
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
          height: "250px",
          borderRadius: `25px 25px 25px 25px`,
        }}
      />
    </Card>
  )
}
