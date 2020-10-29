import React from 'react'

// Styles
import './username.sass'

const UserUsername = (props) => {
    return (
        <div className="user-username">
            {props.username}
        </div>
    )
}

export { UserUsername }