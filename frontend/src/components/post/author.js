import React from "react"
import Img from "gatsby-image"
import { Flex, Heading } from "rebass"

import { Facebook, Instagram, Twitter, Link } from "grommet-icons"

function renderSocialIcon(site) {
  if (site === `Facebook`) {
    return <Facebook size="small" color="var(--dark-1)" />
  }

  if (site === `Instagram`) {
    return <Instagram size="small" color="var(--dark-1)" />
  }

  if (site === `Twitter`) {
    return <Twitter size="small" color="var(--dark-1)" />
  }

  return <Link size="small" color="var(--dark-1)" />
}

export default function Author({ author }) {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center">
        <Img
          fixed={author.image.asset.fixed}
          style={{ borderRadius: `100%` }}
        />
      </Flex>
      <Flex ml={[2]} flexDirection="column">
        <Heading fontSize={[1]} fontWeight="lighter">
          {author.name}
        </Heading>
        <a href={`${author.social.site.siteUrl}/${author.social.handle}`}>
          <Heading fontSize={[1]} fontWeight="lighter">
            {renderSocialIcon(author.social.site.siteName)}{" "}
            {`@${author.social.handle}`}
          </Heading>
        </a>
      </Flex>
    </Flex>
  )
}
