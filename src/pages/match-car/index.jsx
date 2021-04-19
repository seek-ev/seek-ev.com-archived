import React from 'react'

// Styles
import { Wrapper, Construction, HomeLink } from './styles'

// Components
import { Navbar } from 'components/navbar'

const MatchCarPage = () => {
    return (
        <Wrapper>
            <Navbar />

            <Construction>
                Page under construction
                <HomeLink to="/home">
                    Back to Home page
                </HomeLink>
            </Construction>
        </Wrapper>
    )
}

export { MatchCarPage }