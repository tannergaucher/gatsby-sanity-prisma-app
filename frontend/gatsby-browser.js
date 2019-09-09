const React = require("react")
const { ApolloProvider } = require("@apollo/react-hooks")

const { Layout } = require("./src/components/layout")
const { client } = require("./src/components/apollo/client")

exports.wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Layout>{element}</Layout>
  </ApolloProvider>
)
