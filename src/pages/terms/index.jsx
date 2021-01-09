import React from 'react'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { Terms } from 'components/pages/terms'
import { TermsNavbar } from 'components/pages/terms/navbar'

const TermsPage = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Terms of Service</title>
                <meta property="description" content="Seek EV Terms of Service" />

                <meta property="og:title" content="Terms of Service" />
                <meta property="og:description" content="Seek EV Terms of Service" />
            </Helmet>

            <TermsNavbar />

            <Terms />
        </Wrapper>
    )
}


export { TermsPage }