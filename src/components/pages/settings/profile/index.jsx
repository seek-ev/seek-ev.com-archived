import React from 'react'

// Styles
import { Profile, ProfileTitle, Header, Details, DetailsItem, Title, Email } from './styles'

// Components
import { ProfileAvatar } from './avatar'
import { SettingsPassword } from './password'
import { SettingsProfileUsername } from './username'

const SettingsProfile = ({ user }) => {
    return (
        <Profile>
            <ProfileTitle>
                Your profile
            </ProfileTitle>
            <Header>
                <ProfileAvatar avatar={user.avatar} />

                <SettingsProfileUsername username={user.username} />
            </Header>

            <Details>
                <DetailsItem>
                    <Title>
                        Your email:
                    </Title>
                    <Email>
                        {user.email}
                    </Email>
                </DetailsItem>

                <DetailsItem>
                    <SettingsPassword />
                </DetailsItem>
            </Details>
        </Profile>
    )
}

export { SettingsProfile }