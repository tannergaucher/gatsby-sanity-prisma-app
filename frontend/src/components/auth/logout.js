import React from "react"
import { useApolloClient } from "@apollo/react-hooks"

export default function logout() {
  const client = useApolloClient()

  return (
    <button
      onClick={() => {
        localStorage.removeItem("token")
        client.resetStore()
      }}
    >
      Log Out
    </button>
  )
}
