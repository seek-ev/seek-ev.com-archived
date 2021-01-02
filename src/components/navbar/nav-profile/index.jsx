import React from 'react'

// Styles
import { Profile, Avatar, Username } from './styles'

const NavProfile = ({ username, avatar }) => {
    return (
        <Profile to={'/u/' + username}>
            <Avatar>
                <img src={avatar ? avatar.url : 'se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="nav_avatar" />
            </Avatar>
            <Username>{username}</Username>
        </Profile>
    )
}

export { NavProfile }