import React from "react"
import { Heading, Text } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"
import { AuthTabs } from "../components/auth"

export default function ListsPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      <Heading mb={[3]}>Lists</Heading>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
    </>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <>
            <Heading>{list.title}</Heading>
            {list.places.map(place => (
              <>
                <Text>{place.placeName}</Text>
              </>
            ))}
          </>
        ))}
    </>
  )
}
