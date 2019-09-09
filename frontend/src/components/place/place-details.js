import React, { useState } from "react"
import { Flex, Link as RebassLink, Text, Heading } from "rebass"
import { Facebook, Instagram, Twitter, Domain, Phone, Map } from "grommet-icons"

export default function PlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        style={{
          fontFamily: `var(--sans)`,
        }}
        onClick={() => {
          setShow(!show)
        }}
      >
        <Heading fontSize={2} fontWeight="lighter">
          Details
        </Heading>
      </button>
      {show && (
        <Flex flexDirection="column" mt={[3]} ml={[1]}>
          {place.place.location && (
            <Flex mt={[3]}>
              <Map size="18px" />
              <RebassLink
                ml={[3]}
                fontSize={[1]}
                color="var(--dark-2)"
                href="#"
                style={{
                  fontFamily: `var(--sans)`,
                }}
              >
                On Google Maps
              </RebassLink>
            </Flex>
          )}
          {place.place.facebookLink && (
            <Flex mt={[3]}>
              <Facebook size="18px" />
              <RebassLink
                href={place.place.facebookLink}
                ml={[3]}
                fontSize={[1]}
                color="var(--dark-2)"
                style={{
                  fontFamily: `var(--sans)`,
                }}
              >
                Facebook
              </RebassLink>
            </Flex>
          )}
          {place.place.instagramLink && (
            <Flex mt={[3]}>
              <Instagram size="18px" />
              <RebassLink
                href={place.place.instagramLink}
                ml={[3]}
                fontSize={[1]}
                color="var(--dark-2)"
                style={{
                  fontFamily: `var(--sans)`,
                }}
              >
                Instagram
              </RebassLink>
            </Flex>
          )}
          {place.place.twitterLink && (
            <Flex mt={[3]}>
              <Twitter size="18px" />
              <RebassLink
                href={place.place.twitterLink}
                ml={[3]}
                fontSize={[1]}
                color="var(--dark-2)"
                style={{
                  fontFamily: `var(--sans)`,
                }}
              >
                Twitter
              </RebassLink>
            </Flex>
          )}
          {place.place.websiteLink && (
            <Flex mt={[3]}>
              <Domain size="18px" />
              <RebassLink
                href={place.place.websiteLink}
                ml={[3]}
                fontSize={[1]}
                color="var(--dark-2)"
                style={{
                  fontFamily: `var(--sans)`,
                }}
              >
                Visit Website
              </RebassLink>
            </Flex>
          )}
          {place.place.phoneNumber && (
            <Flex mt={[3]}>
              <Phone size="18px" />
              <Text
                ml={[3]}
                fontSize={[1]}
                color="var(--dark-2)"
                style={{
                  fontFamily: `var(--sans)`,
                }}
              >
                {place.place.phoneNumber}
              </Text>
            </Flex>
          )}
        </Flex>
      )}
    </>
  )
}
