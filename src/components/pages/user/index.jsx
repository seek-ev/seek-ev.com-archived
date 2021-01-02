import React from 'react'

// Styles
import { Wrapper, Header, HeaderDetails, Details } from './styles'

// Components
import { UserAvatar } from 'components/pages/user/avatar'
import { UserBadges } from 'components/pages/user/badges'
import { Username } from 'components/pages/user/username'
import { DetailsMenu } from 'components/pages/user/details/menu'
import { DetailsCars } from 'components/pages/user/details/cars'

const User = ({ item, user, loading, onItemChange }) => {
    return (
        <Wrapper>
            <Header>
                <UserAvatar avatar={user.avatar} />
                <HeaderDetails>
                    <Username name={user.username} />
                    <UserBadges flags={user.flags} />
                </HeaderDetails>
            </Header>
            <Details>
                <DetailsMenu baseItem={item} itemChange={onItemChange} />
                <DetailsCars cars={user.cars} />
            </Details>
        </Wrapper>
    )
}

export { User }