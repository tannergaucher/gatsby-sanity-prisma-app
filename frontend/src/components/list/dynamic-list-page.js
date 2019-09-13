import React from "react"
import { Heading } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { LIST_QUERY } from "../apollo/graphql"
import { SEO, Map, Loading } from "../elements"

export default function ListPage({ listId }) {
  const { loading, error, data } = useQuery(LIST_QUERY, {
    variables: { listId },
  })

  console.log(data)

  return (
    <>
      {loading && <Loading message="Loading list..." />}
      {error && `Error: ${error.message}`}
      {data && data.list && (
        <>
          <SEO title={`${data.list.title} | Untrip`} />
          <Heading my={[3]} textAlign="center" fontWeight="900" fontSize={[4]}>
            {data.list.title}
          </Heading>
          <Map />
          <ul>
            {data.list.places.map(place => (
              <li key={place.id}>{place.placeName}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
