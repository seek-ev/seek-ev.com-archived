import React from 'react'

// Styles
import { Wrapper } from './styles'

const BrandAvatar = ({ avatar }) => {
    return (
        <Wrapper>
            <img src={avatar ? avatar.url : '/se_dark.png'} alt={avatar ? avatar.id : 'brand_avatar'} />
        </Wrapper>
    )
}

export { BrandAvatar }