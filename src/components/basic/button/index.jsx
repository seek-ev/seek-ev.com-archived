import React from 'react'

// Styles
import { Wrapper } from './styles'

const Button = (props) => {
  return (
    <Wrapper
      primary={props.primary}
      error={props.error}
      raise={props.raise}
      blue={props.blue}
      dark={props.dark}
      clean={props.clean}
      round={props.round}
      onClick={props.onClick}
      disabled={props.disabled}
      mr={props.mr}
      ml={props.ml}
    >
      {props.text}
    </Wrapper>
  )
}

export { Button }
