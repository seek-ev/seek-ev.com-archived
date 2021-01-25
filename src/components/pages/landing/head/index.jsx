import React from 'react'

// Styles
import { Wrapper, Top } from './styles'

// Components
import { Left } from './left'
import { Right } from './right'
import { Bottom } from './bottom'

const Head = () => {
    return (
        <Wrapper>
            <Top>
                <Left />
                <Right />
            </Top>
            <Bottom />
        </Wrapper>
    )
}

export { Head }