import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, Link } from 'react-router-dom'

// Styles
import './404.sass'

const NotFound = () => {
    const location = useLocation()

    return (
        <div className="not-found">
            <Helmet>
                <title>Page not found</title>
                <meta name="description" content="Page not found" />
            </Helmet>
            <div className="not-found-title">404</div>
            <div>
                Page <code>{location.pathname}</code> not found
            </div>
            <Link to="/">Return to home</Link>
        </div>
    )
}

export default NotFound