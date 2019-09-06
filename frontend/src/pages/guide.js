import React from "react"
import { Heading } from "rebass"

import { Categories } from "../components/category"

export default function Guide() {
  return (
    <>
      <Heading
        mb={[3]}
        textAlign="center"
        fontFamily="var(--sans)"
        fontWeight="900"
        fontSize={[5]}
      >
        Guide
      </Heading>
      <Categories />
    </>
  )
}
