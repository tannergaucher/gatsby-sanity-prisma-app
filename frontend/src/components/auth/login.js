import React, { useState } from "react"

import { Button, TextInput } from "../styles"

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
    <fieldset disabled={loading} style={{ border: `none` }}>
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
            mt={[2]}
            disabled={loading}
          />
        </label>
        <label htmlFor="password">
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            mt={[2]}
            disabled={loading}
          />
        </label>
        <Button
          type="submit"
          label="Log In"
          mt={[2]}
          fill
          primary
          disabled={loading}
        />
      </form>
    </fieldset>
  )
}
