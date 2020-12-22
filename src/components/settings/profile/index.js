import React from 'react'

// Styles
import './profile.sass'

// Components
import { ProfileAvatar } from './avatar'
import { SettingsPassword } from './password'
import { SettingsProfileUsername } from './username'

const SettingsProfile = ({ user }) => {
    return (
        <div>
            <div className="settings-profile-title">
                Your profile
            </div>
            <div className="settings-header">
                <ProfileAvatar avatar={user.avatar} />

                <SettingsProfileUsername username={user.username} />
            </div>

            <div className="settings-item-details">
                <div className="settings-item-details-item">
                    <div className="settings-item-title">
                        Your email:
                                </div>
                    <div className="settings-email">
                        {user.email}
                    </div>
                </div>

                <div className="settings-item-details-item">
                    <SettingsPassword />
                </div>
            </div>
        </div>
    )
}

export { SettingsProfile }