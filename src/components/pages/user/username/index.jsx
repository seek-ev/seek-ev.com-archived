import React from 'react'

// Styles
import { Wrapper, Icon } from './styles'

const Username = ({ name, flags, url }) => {
    return (
        <Wrapper>
            {name}
            {flags & (1 << 6) && url ? <a href={url}><Icon /></a> : ''}
        </Wrapper >
    )
}

export { Username }