import React from 'react'

// Styles
import './input.sass'

const Input = (props) => {
  function handleChange(e) {
    props.onChange(e.target)
  }

  return (
    <div className='s-input'>
      <input
        value={props.value}
        onChange={handleChange}
        className={
          (props.raise ? 'raise-input ' : '') +
          (props.border ? 'border-input ' : '') +
          (props.error ? 'error-input ' : '') +
          (props.valid ? 'valid-input ' : '') +
          (props.round ? 'round-input ' : '')
        }
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled}
        autoComplete={props.autoComplete}
      />

      <div className='error-message'>{props.error}</div>
    </div>
  )
}

export default Input
