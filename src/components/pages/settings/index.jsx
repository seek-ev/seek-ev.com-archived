import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { SettingsMenu } from 'components/pages/settings/menu'
import { SettingsProfile } from 'components/pages/settings/profile'
import { SettingsConnections } from 'components/pages/settings/connections/index'

const Settings = ({ item, user, location, onItemChange }) => {
    return (
        <Wrapper>
            <SettingsMenu onChange={onItemChange} item={item} />

            {item === 'profile' ? <SettingsProfile user={user} /> : ''}

            {item === 'connections' ? <SettingsConnections params={location.search} /> : ''}
        </Wrapper>
    )
}

export { Settings }