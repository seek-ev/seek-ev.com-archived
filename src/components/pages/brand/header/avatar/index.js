import React from 'react'

// Styles
import './avatar.sass'

const BrandAvatar = ({ avatar }) => {
    return (
        <div className="brand-avatar">
            <img src={avatar ? avatar.url : '/se_dark.png'} alt={avatar ? avatar.id : 'brand_avatar'} />
        </div>
    )
}

export { BrandAvatar }