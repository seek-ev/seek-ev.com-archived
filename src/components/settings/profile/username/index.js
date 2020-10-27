import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import './username.sass'

// Components
import { Input } from '../../../basic/input'

// Icons
import { MdModeEdit, MdClose, MdSave } from 'react-icons/md'

// Actions
import { setStateUsername } from '../../../../actions/auth'
import { showSnackbar } from '../../../../actions/snackbar'

const SettingsProfileUsername = (props) => {
    const [username, setUsername] = useState('')
    const [currentUsername, setCurrentUsername] = useState('')
    const [editing, setEditing] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setUsername(props.username)
        setCurrentUsername(props.username)
    }, [props.username])

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
        if (username === currentUsername) return setError('dd')

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
        <div className="settings-username-container">
            <div className="settings-username">
                <div className="settings-username-input">
                    <Input name='username' type="text" placeholder="Username" autoComplete='off' value={username || ''} onChange={onUsernameChange} disabled={!editing} error={error} />
                </div>

                <div className="settings-username-icon">
                    <MdModeEdit className={editing ? 'editing-hidden' : ''} onClick={() => setEditing(true)} />
                    <MdClose className={editing ? 'icon-close' : 'editing-hidden'} onClick={() => cancelEditing()} />
                    <MdSave className={editing ? 'icon-save' : 'editing-hidden'} onClick={() => saveUsername()} />
                </div>
            </div>
        </div>
    )
}

export { SettingsProfileUsername }