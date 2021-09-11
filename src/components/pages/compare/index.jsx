import React from 'react'


// Styles
import {
  Wrapper
} from './styles'

// Components
import { Header } from './header'

const Comparison = ({ comparison }) => {
  return (
    <Wrapper>
      <Header title={comparison.name} type={comparison.type} creator={comparison.createdBy} />
    </Wrapper>
  )
}

export { Comparison }