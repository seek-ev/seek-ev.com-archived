import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'


// Styles
import {
    Connections,
    ConnectionsTitle,
    List,
    Create,
    CreateTitle,
    ConnectButton,
    ConnectIcon,
    LoadingWrapper,
    Loading
} from './styles'

// Icons
import { FaDiscord, FaPatreon } from 'react-icons/fa'

// Components
import { SettingsConnection } from './connection/index'

// Actions
import { showSnackbar } from 'actions/snackbar'

const SettingsConnections = ({ params }) => {
    const [connections, setConnections] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingConnections, setLoadingConnections] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const fetchConnections = async () => {
            setLoadingConnections(true)
            await axios.get('/users/@me/connections').then(res => setConnections(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            setLoadingConnections(false)
        }

        async function saveConnection() {
            setLoading(true)
            const paramsProp = params.replace('?', '').split('&')

            if (!paramsProp[1]) return setLoading(false)

            if (paramsProp[0].includes('type=') && paramsProp[1].includes('code=')) {
                await axios.post(`/users/@me/connection/${paramsProp[0].split('=')[1]}`, {
                    code: paramsProp[1].split('=')[1]
                }).then(res => {
                    dispatch(showSnackbar(`${res.data.connection.type} connected`, 'success'))
                    fetchConnections()
                }).catch(err => dispatch(showSnackbar(err, 'error')))
            }

            if (paramsProp[1].includes('error=')) dispatch(showSnackbar('Connection declined', 'error'))

            // Remove query after request
            history.push({ search: '' })

            setLoading(false)
        }

        if (params) {
            saveConnection()
        }

        fetchConnections()
    }, [params, dispatch])

    const onLoading = (loading, revoked) => {
        const fetchConnectionsRevoked = async () => {
            setLoadingConnections(true)
            await axios.get('/users/@me/connections').then(res => setConnections(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            setLoadingConnections(false)
        }

        setLoading(loading)
        if (revoked) fetchConnectionsRevoked()
    }

    return (
        <Connections>
            <ConnectionsTitle>
                Your connections
            </ConnectionsTitle>

            {connections.length > 0 ?
                <List>
                    {connections.map(c => {
                        return <SettingsConnection connection={c} key={c.type} onLoading={onLoading} />
                    })}
                </List>
                : <List>No connections yet</List>}

            {connections.length === 2 ? '' :
                <Create>
                    <CreateTitle>
                        Connect:
                    </CreateTitle>
                    {connections.some(c => c.type === 'discord')}
                    {connections.some(c => c.type === 'discord') ? '' : <ConnectButton type="discord" href="https://discord.com/api/oauth2/authorize?client_id=745299401160786010&redirect_uri=https%3A%2F%2Fseek-ev.com%2Fsettings%3Ftype%3Ddiscord&response_type=code&scope=identify%20guilds">
                        Discord <ConnectIcon><FaDiscord /></ConnectIcon>
                    </ConnectButton>}
                    {connections.some(c => c.type === 'patreon') ? '' : <ConnectButton type="patreon" href="https://www.patreon.com/oauth2/authorize?response_type=code&client_id=gJy5qU6eqaMwRCvtrPW882W9DeGsYSraXkRKWsWDyYsQo38Lu3TmAcHXU-6lFhKi&redirect_uri=https://seek-ev.com/settings?type=patreon&scope=identity">
                        Patreon <ConnectIcon><FaPatreon /></ConnectIcon>
                    </ConnectButton>}
                </Create>
            }

            {loading ? <LoadingWrapper>
                <Loading></Loading>
            </LoadingWrapper> : ''}

            {loadingConnections ? <Loading></Loading> : ''}
        </Connections >
    )
}

export { SettingsConnections }