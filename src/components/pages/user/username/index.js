import React from 'react'

// Styles
import './username.sass'

const UserUsername = ({ username }) => {
    return (
        <div className="user-username">
            {username}
        </div>
    )
}

export { UserUsername }