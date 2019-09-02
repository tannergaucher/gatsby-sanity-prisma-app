import React from "react"
import { Tabs, Tab } from "grommet"

import { Login, Signup } from "."

export default function AuthTabs() {
  return (
    <Tabs>
      <Tab title="Log In">
        <Login />
      </Tab>
      <Tab title="Sign Up">
        <Signup />
      </Tab>
    </Tabs>
  )
}
