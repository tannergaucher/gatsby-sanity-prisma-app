import React from "react"
import { Link } from "gatsby"
import { Heading, Text } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"
import { AuthTabs } from "../components/auth"
import { HeroCard } from "../components/styles"

export default function ListsPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      <Heading
        mb={[3]}
        textAlign="center"
        fontFamily="var(--sans)"
        fontWeight="900"
        fontSize={[5]}
      >
        My Untrips
      </Heading>
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
        // TODO: Handle case of user not having any lists. Display you have no lists message
        // TODO: Handle case of list not having any places. Display this list has no places message and default to generic background img
        data.me.lists.map(list => (
          <Link to={`/lists&id=?${list.id}`}>
            {/* TODO: ADD edit and delete list icons on hover to hero card */}
            <HeroCard
              key={list.id}
              text={list.title}
              fluid={JSON.parse(list.places[0].placeImageUrl)}
            />
          </Link>
        ))}
    </>
  )
}
