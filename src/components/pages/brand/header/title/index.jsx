import React from 'react'

// Styles
import { Wrapper, Title, Founded } from './styles'

const BrandTitle = ({ name, founded, back }) => {
    return (
        <Wrapper founded={founded}>
            <Title back={back}>
                {name}
            </Title>
            <Founded>
                {founded}
            </Founded>
        </Wrapper>
    )
}

export { BrandTitle }