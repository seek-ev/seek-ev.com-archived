import React from 'react'

// Styles
import './select.sass'

const Select = (props) => {
  function handleChange(e) {
    // onChange prop is required
    props.onChange(e.target)
  }

  return (
    <select
      name={props.name}
      onChange={handleChange}
      disabled={props.disabled}
      className={props.raise ? 'raise-select ' : ''}
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
    </select>
  )
}

export { Select }
