import React from 'react'
import { useLocation } from 'react-router-dom'

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
        </div>
    )
}

export default NotFound