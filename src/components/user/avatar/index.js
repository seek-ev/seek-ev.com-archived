import React from 'react'

// Styles
import './avatar.sass'

const UserAvatar = (props) => {
    return (
        <div className="user-avatar">
            <img src={props.avatar ? props.avatar.url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="user-avatar" />
        </div>
    )
}

export { UserAvatar }