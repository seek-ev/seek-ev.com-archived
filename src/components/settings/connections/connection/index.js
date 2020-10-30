import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

// Styles
import './connection.sass'

// Actions
import { showSnackbar } from '../../../../actions/snackbar'

const SettingsConnection = (props) => {
    const dispatch = useDispatch()
    const revoke = async () => {
        await onLoading(true)
        await axios.delete(`/users/@me/connection/${props.connection.type}`).then(res => dispatch(showSnackbar(`${props.connection.type} revoked`, 'success'))).catch(err => dispatch(showSnackbar(err, 'error')))
        await onLoading(false, true)
    }

    const onLoading = (loading, revoked) => {
        props.onLoading(loading, revoked)
    }

    return (
        <div className={`settings-connection ${props.connection.type}`}>
            <div className="settings-conneciton-title">{props.connection.type.charAt(0).toUpperCase() + props.connection.type.slice(1)}</div>
            <div className="settings-connection-details">
                <div><span>Account ID:</span> {props.connection.accountId}</div>
                <div className="settings-connection-name"><span>Account name:</span> {props.connection.name}</div>
                <div><span>Revoked:</span> {props.connection.revoked ? 'Yes' : 'No'}</div>
                <div><span>Created:</span> {new Date(props.connection.createdAt).toLocaleDateString()}</div>
            </div>
            <div className="settings-connection-footer">
                <div className={props.connection.revoked ? 'settings-connection-hidden' : 'settings-connection-button'} onClick={() => revoke()}>
                    Revoke
                </div>
                <a href={props.connection.type === 'discord' ? 'https://discord.com/oauth2/authorize?client_id=745299401160786010&redirect_uri=https%3A%2F%2Fseek-ev.com%2Fsettings%3Ftype%3Ddiscord&response_type=code&scope=identify' : 'https://www.patreon.com/oauth2/authorize?response_type=code&client_id=gJy5qU6eqaMwRCvtrPW882W9DeGsYSraXkRKWsWDyYsQo38Lu3TmAcHXU-6lFhKi&redirect_uri=https://seek-ev.com/settings?type=patreon&scope=identity'} className={props.connection.revoked ? 'settings-connection-button renew' : 'settings-connection-hidden'} >
                    Renew
                </a>
            </div>
        </div>
    )
}

export { SettingsConnection }