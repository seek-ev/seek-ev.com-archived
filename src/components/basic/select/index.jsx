import React from 'react'

// Styles
import { Wrapper } from './styles'

const Select = (props) => {
  function handleChange(e) {
    // onChange prop is required
    props.onChange(e.target)
  }

  return (
    <Wrapper
      name={props.name}
      onChange={handleChange}
      disabled={props.disabled}
      raise={props.raise}
      defaultValue={props.selected ? props.selected : undefined}
    >
      {props.options
        ? props.options.map((option, index) => (
          <option
            key={option.id ? option.id : index}
            hidden={option.hidden}
            value={
              props.value ? option[props.value] : option.value ? option.value : option.id ? option.id : option
            }
          >
            {props.display ? option[props.display] : option.name ? option.name : option}
          </option>
        ))
        : ''}
    </Wrapper>
  )
}

export { Select }
