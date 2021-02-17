import React from 'react'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { NewTest } from 'components/pages/tests-new'

const NewTestPage = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>New test</title>
            </Helmet>

            <Navbar />

            <NewTest />
        </Wrapper>
    )
}

export { NewTestPage }