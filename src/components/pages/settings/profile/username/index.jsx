import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Username, UsernameInput, Icon, CloseIcon, SaveIcon, SettingsInput } from './styles'

// Icons
import { MdModeEdit } from 'react-icons/md'

// Actions
import { setStateUsername } from 'actions/user'
import { showSnackbar } from 'actions/snackbar'

const SettingsProfileUsername = ({ username }) => {
    const [usernameState, setUsername] = useState('')
    const [currentUsername, setCurrentUsername] = useState('')
    const [editing, setEditing] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setUsername(username)
        setCurrentUsername(username)
    }, [username])

    const onUsernameChange = async (e) => {
        await setUsername(e.value)
        await setError('')
    }

    const cancelEditing = () => {
        setError('')
        setEditing(false)
        setUsername(currentUsername)
    }

    const saveUsername = async () => {
        if (usernameState.length < 4) return setError('Oops, at least 4 letters mate')
        if (usernameState === currentUsername) return setError('Mate, that\'s already your username')

        await axios.patch('/users', { usernameState }).then(res => {
            setCurrentUsername(usernameState)
            dispatch(setStateUsername(usernameState))
            dispatch(showSnackbar('Username changed', 'success'))
        }).catch(err => {
            setUsername(currentUsername)
            dispatch(showSnackbar(err, 'error'))
        })

        await setEditing(false)
    }

    return (
        <Username>
            <UsernameInput>
                <SettingsInput name='username' type="text" placeholder="Username" autoComplete='off' value={usernameState || ''} onChange={onUsernameChange} disabled={!editing} error={error} />
            </UsernameInput>

            {editing ? <Icon>
                <CloseIcon onClick={() => cancelEditing()} />
                <SaveIcon onClick={() => saveUsername()} />
            </Icon>
                : <Icon>
                    <MdModeEdit onClick={() => setEditing(true)} />
                </Icon>}
        </Username>
    )
}

export { SettingsProfileUsername }