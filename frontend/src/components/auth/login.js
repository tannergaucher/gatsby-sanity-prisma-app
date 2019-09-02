import React, { useState } from "react"
import { Heading } from "rebass"
import { TextInput, Button } from "grommet"

import { LOGIN_MUTATION } from "../apollo/graphql"
import { useMutation, useApolloClient } from "@apollo/react-hooks"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
  })
  const client = useApolloClient()

  return (
    <fieldset disabled={loading}>
      <Heading>Log in to your account</Heading>
      {error && `Error: ${error.message}`}
      <form
        onSubmit={async e => {
          e.preventDefault()
          const { data } = await login()
          localStorage.setItem("token", data.login.token)
          client.writeData({
            data: {
              isLoggedIn: true,
              me: data.login.user,
            },
          })
        }}
      >
        <label htmlFor="email">
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <Button type="submit" label="Log In" />
      </form>
    </fieldset>
  )
}
