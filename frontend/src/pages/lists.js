import React from "react"
import { Heading } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"
import { AuthTabs } from "../components/auth"

// check isLoggedIn bool
// if !isLoggedIn, return AuthTabs
// else return UserLists

export default function ListsPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      <Heading>Lists</Heading>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
    </>
  )
}

function UserLists() {
  // USER LISTS QUERY
  return `User lists`
}
