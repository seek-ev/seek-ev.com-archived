import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './nav_profile.sass'

const NavProfile = ({ username, avatar }) => {
    return (
        <Link to={'/u/' + username} className='nav-profile'>
            <div className="nav-profile-avatar">
                <img src={avatar ? avatar.url : 'se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="avatar" />
            </div>

            <div className='nav-profile-username'>
                {username}
            </div>
        </Link>
    )
}

export { NavProfile }