import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

// Styles
import { Connection, ConnectionRow, HeaderWrapper, Header, HeaderTitle, HeaderDetails, HeaderDetail, HeaderIcon, Footer, RevokeButton, RenewButton } from './styles'

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
        <Connection revoked={connection.revoked}>
            <ConnectionRow>
                <HeaderWrapper>
                    <Header type={connection.type}>
                        <HeaderTitle>
                            {connection.type.charAt(0).toUpperCase() + connection.type.slice(1)}
                        </HeaderTitle>
                    </Header>
                    <HeaderDetails>
                        <HeaderDetail><span>Account ID:</span> {connection.accountId}</HeaderDetail>
                        <HeaderDetail><span>Account name:</span> {connection.name}</HeaderDetail>
                        <HeaderDetail><span>Revoked:</span> {connection.revoked ? 'Yes' : 'No'}</HeaderDetail>
                        <HeaderDetail><span>Updated:</span> {new Date(connection.updatedAt).toLocaleDateString()}</HeaderDetail>
                        <HeaderDetail><span>Connected:</span> {new Date(connection.createdAt).toLocaleDateString()}</HeaderDetail>
                    </HeaderDetails>
                </HeaderWrapper>
                <HeaderIcon type={connection.type}>
                    {connection.type === 'discord' ? <FaDiscord /> : <FaPatreon />}
                </HeaderIcon>
            </ConnectionRow>
            <Footer>
                {connection.revoked ? <RenewButton
                    href={connection.type === 'discord' ?
                        'https://discord.com/api/oauth2/authorize?client_id=745299401160786010&redirect_uri=https%3A%2F%2Fseek-ev.com%2Fsettings%3Ftype%3Ddiscord&response_type=code&scope=identify%20guilds'
                        : 'https://www.patreon.com/oauth2/authorize?response_type=code&client_id=gJy5qU6eqaMwRCvtrPW882W9DeGsYSraXkRKWsWDyYsQo38Lu3TmAcHXU-6lFhKi&redirect_uri=https://seek-ev.com/settings?type=patreon&scope=identity'}>
                    Renew
                </RenewButton> :
                    <RevokeButton onClick={() => revoke()}>Revoke</RevokeButton>
                }
            </Footer>
        </Connection>
    )
}

export { SettingsConnection }