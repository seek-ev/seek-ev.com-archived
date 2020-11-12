import React from 'react'
import { useLocation, Link } from 'react-router-dom'

// Styles
import './404.sass'

const NotFound = () => {
    const location = useLocation()

    return (
        <div className="not-found">
            <div className="not-found-title">404</div>
            <div>
                Page <code>{location.pathname}</code> not found
            </div>
            <Link to="/">Return to home</Link>
        </div>
    )
}

export default NotFound