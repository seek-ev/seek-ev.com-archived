import React from 'react'

// Styles
import { Wrapper, SInput, ErrorMessage } from './styles'

const Input = (props) => {
  function handleChange(e) {
    props.onChange(e.target)
  }

  return (
    <Wrapper className='s-input'>
      <SInput
        value={props.value}
        onChange={handleChange}
        raise={props.raise}
        border={props.border}
        error={props.error}
        valid={props.valid}
        round={props.round}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled}
        autoComplete={props.autoComplete}
      />

      <ErrorMessage className='error-message'>{props.error}</ErrorMessage>
    </Wrapper>
  )
}

export { Input }
