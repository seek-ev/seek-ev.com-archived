import React from 'react'
import { Link } from 'react-router-dom'

export const TermsLogo = () => {
    return (
        <Link to="/" className="tos-logo">
            <div className="tos-logo-img">
                <img src="/se_dark.png" alt="tos_logo" />
            </div>
            <div className="tos-logo-brand">
                SEEK EV
            </div>
        </Link>
    )
}