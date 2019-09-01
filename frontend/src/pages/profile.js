import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Heading, Text } from "rebass"

import { IS_LOGGED_IN } from "../components/apollo/graphql"

export default function Profile() {
  const { data, loading, error } = useQuery(IS_LOGGED_IN)

  return (
    <>
      {loading && "Loading..."}
      {error && "Error"}
      <Heading>Profile Page</Heading>
      <Text>You are {data.isLoggedIn ? "" : "not"} logged in </Text>
    </>
  )
}
