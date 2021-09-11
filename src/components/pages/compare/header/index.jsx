import React from 'react'

import {
  Wrapper,
  Title,
  Type,
  Creator,
  Highlighted,
  Date
} from './styles'

const Header = ({ title, type, creator }) => {
  return (
    <Wrapper>
      <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      <Type>{type.charAt(0).toUpperCase() + type.slice(1)} type</Type>
      <Creator>
        Created by <Highlighted>{creator.username}</Highlighted> on <Date>asdas</Date>
      </Creator>
    </Wrapper>
  )
}

export { Header }