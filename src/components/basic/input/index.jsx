import React from 'react'

// Styles
import { Wrapper, Title, SInput, ErrorMessage } from './styles'

const Input = (props) => {
  function handleChange(e) {
    props.onChange(e.target)
  }

  return (
    <Wrapper className={props.className} title={props.title}>
      {props.title ? <Title>
        {props.title}
      </Title> : ''}
      <SInput
        id={props.id}
        value={props.value}
        onChange={handleChange}
        raise={props.raise}
        border={props.border}
        error={props.error}
        valid={props.valid}
        round={props.round}
        name={props.name}
        type={props.type}
        checked={props.checked}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled}
        autoComplete={props.autoComplete}
        min={props.min}
        max={props.max}
        maxLength={props.maxlength}
        minLength={props.minlength}
        step={props.step}
      />

      <ErrorMessage>{props.error}</ErrorMessage>
    </Wrapper>
  )
}

export { Input }
