import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Heading, Box } from "rebass"
import { useQuery } from "@apollo/react-hooks"
import { LIST_QUERY } from "../apollo/graphql"

import { Map } from "../elements"

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

          {data.list.places.map(place => (
            <Box key={place.id}>
              <Link to={`/place/${place.placeSlug}`}>
                <Heading>{place.placeName}</Heading>
                <Img fluid={JSON.parse(place.placeImageUrl)} />
              </Link>
            </Box>
          ))}
        </>
      )}
    </>
  )
}
