import React from 'react'

// Styles
import { Wrapper, Header, HeaderDetails } from './styles'

// Components
import { Details } from 'components/pages/user/details'
import { UserAvatar } from 'components/pages/user/avatar'
import { UserBadges } from 'components/pages/user/badges'
import { Username } from 'components/pages/user/username'

const User = ({ user }) => {
    return (
        <Wrapper>
            <Header>
                <UserAvatar avatar={user.avatar} />
                <HeaderDetails>
                    <Username name={user.username} flags={user.flags} url={user.contentUrl} />
                    <UserBadges flags={user.flags} />
                </HeaderDetails>
            </Header>
            <Details id={user.id} />
        </Wrapper>
    )
}

export { User }