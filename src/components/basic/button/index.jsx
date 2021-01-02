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
    >
      {props.text}
    </Wrapper>
  )
}

export { Button }
