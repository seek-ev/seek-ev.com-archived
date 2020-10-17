import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import '../reset.sass'

const ResetSuccess = () => {
    return (
        <div className="reset-container">
            <Link to="/">
                <img className="reset-logo" src="../se_dark.png" alt="dark-logo" />
            </Link>
            <div className="reset-title-success">
                <p>Email was sent.</p>
                You can now close this page.
            </div>
        </div>
    )
}

export default ResetSuccess