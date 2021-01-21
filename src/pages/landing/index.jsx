import React from 'react'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { Landing } from 'components/pages/landing'

const LandingPage = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Seek EV</title>
                <meta name="description" content="Seek EV is a place where you can find everything about every existing electric vehicle" />

                <meta property="og:title" content="Seek EV" />
                <meta property="og:description" content="Seek EV is a place where you can find everything about every existing electric vehicle" />
                <meta property="og:image" content="https://seekev.s3.eu-central-1.amazonaws.com/assets/se_dark.png" />
            </Helmet>

            <Landing />
        </Wrapper>
    )
}

export { LandingPage }