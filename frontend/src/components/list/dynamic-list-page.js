import React from "react"
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
          <Map
            lat={42.02}
            lng={-77.01}
            zoom={11}
            style={{ height: `calc(100vh - 50px - 50px)` }}
          />
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
