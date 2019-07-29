const React = require("react")

const { Layout } = require("./src/components/elements")

exports.wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
