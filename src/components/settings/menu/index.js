import React from 'react'

// Styles
import './menu.sass'

const SettingsMenu = () => {
    return (
        <div className="settings-menu">
            <div id="focus" className="settings-menu-item settings-menu-item-choosed">
                Profile
            </div>

            <div className="settings-menu-item settings-menu-item-disabled">
                Other
            </div>
        </div>
    )
}

export { SettingsMenu }