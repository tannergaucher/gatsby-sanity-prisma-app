import React from "react"

import { Heading } from "rebass"
import { useQuery } from "@apollo/react-hooks"
import { LIST_QUERY } from "../apollo/graphql"

// import { Map } from "../elements"

export default function ListPage(props) {
  const { loading, error, data } = useQuery(LIST_QUERY, {
    variables: { listId: props.listId },
  })

  return (
    <>
      {loading && `Loading list...`}
      {error && `Error: ${error.message}`}
      {data && data.list && (
        <>
          <Heading mb={[3]} textAlign="center" fontWeight="900" fontSize={[5]}>
            {data.list.title}
          </Heading>

          {/* GOOGLE MAP HERE  */}

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
