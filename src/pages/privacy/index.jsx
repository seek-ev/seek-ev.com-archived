import React from 'react'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { Privacy } from 'components/pages/privacy'
import { PrivacyNavbar } from 'components/pages/privacy/navbar'

const PrivacyPage = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Privacy Policy</title>
                <meta property="description" content="Seek EV Privacy Policy" />
            </Helmet>

            <PrivacyNavbar />

            <Privacy />
        </Wrapper>
    )
}


export { PrivacyPage }