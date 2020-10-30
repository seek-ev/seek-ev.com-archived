import React from 'react'

// Styles
import './menu.sass'

const SettingsMenu = (props) => {

    const onItemChange = (item) => {
        props.onChange(item)
    }

    return (
        <div className="settings-menu">
            <div id="focus" className={props.item === 'profile' ? 'settings-menu-item settings-menu-item-choosed' : 'settings-menu-item'} onClick={() => onItemChange('profile')}>
                Profile
            </div>

            <div className={props.item === 'connections' ? 'settings-menu-item settings-menu-item-choosed' : 'settings-menu-item'} onClick={() => onItemChange('connections')}>
                Connections
            </div>

            <div className="settings-menu-item settings-menu-item-disabled">
                Other
            </div>
        </div>
    )
}

export { SettingsMenu }