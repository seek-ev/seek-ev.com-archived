import React from 'react'

// Styles
import { Menu, MenuItem } from './styles'

const SettingsMenu = ({ onChange, item }) => {

    const onItemChange = (item) => {
        onChange(item)
    }

    return (
        <Menu>
            <MenuItem id="focus" chosen={item === 'profile'} onClick={() => onItemChange('profile')}>
                Profile
            </MenuItem>

            <MenuItem chosen={item === 'connections'} onClick={() => onItemChange('connections')}>
                Connections
            </MenuItem>

            <MenuItem disabled>
                Other
            </MenuItem>
        </Menu>
    )
}

export { SettingsMenu }