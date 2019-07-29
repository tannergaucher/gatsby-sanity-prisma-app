import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
            social {
              github
            }
          }
        }
      }
    `
  )

  return site
}
