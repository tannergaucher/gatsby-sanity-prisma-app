import React from "react"
import { Button as GrommetButton } from "grommet"
import styled from "styled-components"
import { space } from "styled-system"

const StyledGrommetButton = styled(GrommetButton)`
  ${space};
`

const Button = props => <StyledGrommetButton {...props} />

export default Button
