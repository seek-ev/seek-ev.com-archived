import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, Link } from 'react-router-dom'

// Styles
import { Wrapper, Title } from './styles'

const NotFound = () => {
    const location = useLocation()

    return (
        <Wrapper>
            <Helmet>
                <title>Page not found</title>
                <meta name="description" content="Page not found" />

                <meta property="og:title" content="Page not found" />
                <meta property="og:description" content="Page not found" />
            </Helmet>
            <Title>404</Title>
            <div>
                Page <code>{location.pathname}</code> not found
            </div>
            <Link to="/">Return to home page</Link>
        </Wrapper>
    )
}

export default NotFound