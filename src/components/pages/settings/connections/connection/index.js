import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

// Styles
import './connection.sass'

// Icons
import { FaDiscord, FaPatreon } from 'react-icons/fa'

// Actions
import { showSnackbar } from 'actions/snackbar'

const SettingsConnection = ({ connection, onLoading }) => {
    const dispatch = useDispatch()
    const revoke = async () => {
        await loading(true)
        await axios.delete(`/users/@me/connection/${connection.type}`).then(res => dispatch(showSnackbar(`${connection.type} revoked`, 'success'))).catch(err => dispatch(showSnackbar(err, 'error')))
        await loading(false, true)
    }

    const loading = (loading, revoked) => {
        onLoading(loading, revoked)
    }

    return (
        <div className={`settings-connection ${connection.revoked ? 'settings-connection-revoked' : ''}`}>
            <div className="settings-connection-row">
                <div>
                    <div className={`settings-connection-header ${connection.type}-text`}>
                        <div className="settings-conneciton-title">
                            {connection.type.charAt(0).toUpperCase() + connection.type.slice(1)}
                        </div>
                    </div>
                    <div className="settings-connection-details">
                        <div><span>Account ID:</span> {connection.accountId}</div>
                        <div className="settings-connection-name"><span>Account name:</span> {connection.name}</div>
                        <div><span>Revoked:</span> {connection.revoked ? 'Yes' : 'No'}</div>
                        <div><span>Updated:</span> {new Date(connection.updatedAt).toLocaleDateString()}</div>
                        <div><span>Connected:</span> {new Date(connection.createdAt).toLocaleDateString()}</div>
                    </div>
                </div>
                <div className={`settings-connection-icon ${connection.type}-text`}>
                    {connection.type === 'discord' ? <FaDiscord /> : <FaPatreon />}
                </div>
            </div>
            <div className="settings-connection-footer">
                <div className={connection.revoked ? 'settings-connection-hidden' : 'settings-connection-button'} onClick={() => revoke()}>
                    Revoke
                </div>
                <a href={connection.type === 'discord' ? 'https://discord.com/api/oauth2/authorize?client_id=745299401160786010&redirect_uri=https%3A%2F%2Fseek-ev.com%2Fsettings%3Ftype%3Ddiscord&response_type=code&scope=identify%20guilds' : 'https://www.patreon.com/oauth2/authorize?response_type=code&client_id=gJy5qU6eqaMwRCvtrPW882W9DeGsYSraXkRKWsWDyYsQo38Lu3TmAcHXU-6lFhKi&redirect_uri=https://seek-ev.com/settings?type=patreon&scope=identity'} className={connection.revoked ? 'settings-connection-button renew' : 'settings-connection-hidden'} >
                    Renew
                </a>
            </div>
        </div>
    )
}

export { SettingsConnection }