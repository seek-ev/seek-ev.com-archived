import React from 'react'

// Styles
import './header.sass'

// Components
import { BrandAvatar } from './avatar'

const BrandHeader = (props) => {
    return (
        <div className="brand-header">
            <BrandAvatar avatar={props.avatar} />
        </div>
    )
}

export { BrandHeader }