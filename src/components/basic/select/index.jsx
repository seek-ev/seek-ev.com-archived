import React, { useRef, useState, useEffect } from 'react'

// Styles
import { Wrapper, Options, Option } from './styles'

const Select = ({ raise, value, display, def, options, onChange, disabled }) => {
  const [selected, setSelected] = useState(null)
  const [isOpen, setOpen] = useState(false)


  // Set selected item
  useEffect(() => {
    if (def && display) return setSelected(options.find(o => o[display].toString() === def))
    else if (def) return setSelected(options.find(o => o.id === parseInt(def)))
    else return setSelected(options[0])
  }, [options, def, display])

  // Use refs to control show and hiding options
  const useSelectControl = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpen(false)
        }

        if (ref.current && ref.current.contains(e.target)) {
          setOpen(true)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }

  const selectRef = useRef(null)
  useSelectControl(selectRef)

  // Handle change
  function handleChange(e) {
    // onChange prop is required
    setSelected(e)
    setOpen(false)
    return onChange(value ? e[value] : e)
  }

  return (
    <Wrapper
      ref={selectRef}
      disabled={disabled}
      raise={raise}
    >
      {isOpen ? <Options >
        {options.map((option, index) => (
          <Option
            key={option.id ? option.id : index}
            hidden={option.hidden}
            selected={selected === option}
            onClick={() => handleChange(option)}
          >
            {display ? option[display] : option.name ? option.name : option}
          </Option>
        ))}</Options> : selected ? <Option selected>{display ? selected[display] : selected.name ? selected.name : selected}</Option> : ''}
    </Wrapper>
  )
}

export { Select }
