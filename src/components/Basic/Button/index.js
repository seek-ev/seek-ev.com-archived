import React from 'react'

// Styles
import './button.sass'

const Button = (props) => {
  return (
    <button
      className={
        'button ' +
        (props.primary ? 'primary ' : '') +
        (props.error ? 'error ' : '') +
        (props.raise ? 'raise ' : '') +
        (props.blue ? 'blue ' : '') +
        (props.dark ? 'dark ' : '') +
        (props.clean ? 'clean ' : '') +
        (props.round ? 'round ' : '')
      }
      onClick={props.click}
    >
      {props.text}
    </button>
  )
}

export default Button
