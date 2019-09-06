import React from "react"
import { Heading } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs, Logout } from "../components/auth"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function AccountPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserProfile /> : <AuthTabs />}
    </>
  )
}

function UserProfile() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <Heading
        mb={[3]}
        textAlign="center"
        fontFamily="var(--sans)"
        fontWeight="900"
        fontSize={[5]}
      >
        Profile Page
      </Heading>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.me && (
        <>
          <Heading>{data.me.email}</Heading>
          <Logout />
        </>
      )}
    </>
  )
}
