import React from 'react'

// Styles
import './button.sass'

const Button = (props) => {
  return (
    <button
      className={
        'btn' +
        (props.primary ? ' primary-button' : '') +
        (props.error ? ' error-button' : '') +
        (props.raise ? ' raise-button' : '') +
        (props.blue ? ' blue-button' : '') +
        (props.dark ? ' dark-button' : '') +
        (props.clean ? ' clean-button' : '') +
        (props.round ? ' round-button' : '')
      }
      onClick={props.onClick}
      disabled={props.disabled}
    >
      { props.text}
    </button >
  )
}

export { Button }
