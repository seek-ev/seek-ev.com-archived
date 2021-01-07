import React from 'react'
import { Link } from 'react-router-dom'

const ResetSuccess = () => {
    return (
        <div className="reset-container">
            <Link to="/">
                <img className="reset-confirm-logo" src="../se_dark.png" alt="dark-logo" />
            </Link>
            <div className="reset-confirm-title-success">
                <p>Password changed successfully</p>
                You can now proceed to <Link className="reset-confirm-link" to='/login'>Login Page</Link>
                <br /> and log in with your new password.
            </div>
        </div>
    )
}

export default ResetSuccess