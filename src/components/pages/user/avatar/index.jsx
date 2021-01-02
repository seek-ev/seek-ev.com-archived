import React from 'react'

import { Wrapper } from './styles'

const UserAvatar = ({ avatar }) => {
    return (
        <Wrapper>
            <img src={avatar ? avatar.url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="user-avatar" />
        </Wrapper>
    )
}

export { UserAvatar }