import React from 'react'

// Styles
import './menu.sass'

const SettingsMenu = ({ onChange, item }) => {

    const onItemChange = (item) => {
        onChange(item)
    }

    return (
        <div className="settings-menu">
            <div id="focus" className={item === 'profile' ? 'settings-menu-item settings-menu-item-choosed' : 'settings-menu-item'} onClick={() => onItemChange('profile')}>
                Profile
            </div>

            <div className={item === 'connections' ? 'settings-menu-item settings-menu-item-choosed' : 'settings-menu-item'} onClick={() => onItemChange('connections')}>
                Connections
            </div>

            <div className="settings-menu-item settings-menu-item-disabled">
                Other
            </div>
        </div>
    )
}

export { SettingsMenu }