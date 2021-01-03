import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Username, UsernameInput, Icon, CloseIcon, SaveIcon } from './styles'

// Components
import { Input } from 'components/basic/input'

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
        if (username === currentUsername) return setError('Mate, that\'s already your username')

        await axios.patch('/users', { username }).then(res => {
            setCurrentUsername(username)
            dispatch(setStateUsername(username))
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
                <Input className="settings-input" name='username' type="text" placeholder="Username" autoComplete='off' value={usernameState || ''} onChange={onUsernameChange} disabled={!editing} error={error} />
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