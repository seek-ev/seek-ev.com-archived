import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import './password.sass'

// Icons
import { MdModeEdit } from 'react-icons/md'

// Components
import { Input } from '../../../basic/input'
import { Button } from '../../../basic/button'

// Actions
import { showSnackbar } from '../../../../actions/snackbar'

const SettingsPassword = (props) => {
    const dispatch = useDispatch()
    const [editing, setEditing] = useState()
    const [loading, setLoading] = useState(false)
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        repeat: ''
    })
    const [errors, setErrors] = useState({
        current: false,
        new: false,
        repeat: false
    })

    const updatePassword = async (e) => {
        e.preventDefault()
        if (editing === false) return
        setLoading(true)

        await axios.patch('/auth/password', { oldPassword: passwords.current, newPassword: passwords.new }).then(res => {
            dispatch(showSnackbar('Password changed', 'success'))
        }).catch(err => dispatch(showSnackbar(err, 'error')))

        setEditing(false)
        setLoading(false)
    }

    const onCurrentPasswordChange = async (e) => {
        await setPasswords({ ...passwords, current: e.value })
    }

    const onNewPasswordChange = async (e) => {
        await setPasswords({ ...passwords, new: e.value })
        await handlePasswordValidation(e.value)
    }

    const onRepeatPasswordChange = async (e) => {
        await setPasswords({ ...passwords, repeat: e.value })
        await handleRepeatPasswordValidation(e.value)
    }

    const cancelEditing = async () => {
        await setPasswords({ ...passwords, current: 'd', new: 'd', repeat: 'd' })
        await setEditing(false)
        setErrors({ current: false, new: false, repeat: false })
    }

    const handlePasswordValidation = (value) => {
        const reg = new RegExp(/[A-Z]+/)

        if (value.length < 8) {
            setErrors({ ...errors, new: "Too short, at least 8 characters" })
        } else {
            setErrors({ ...errors, new: false })
            if (!reg.test(value)) {
                setErrors({ ...errors, new: 'Missing at least one capital letter' })
            } else {
                setErrors({ ...errors, new: false })
            }
        }
    }

    const handleRepeatPasswordValidation = (value) => {
        if (passwords.new !== value) {
            setErrors({ ...errors, repeat: "Passwords doesn't match" })
        } else {
            setErrors({ ...errors, repeat: false })
        }
    }

    return (
        <div className="settings-password">
            <div className={editing ? 'settings-hidden' : 'settings-password-title'}>
                Your password
            </div>
            <div className={editing ? 'settings-password-title' : 'settings-hidden'}>
                Update your password
            </div>
            <div className={editing ? 'settings-hidden' : 'settings-passwd'}>
                **************
                <div className="settings-password-icon">
                    <MdModeEdit className={editing ? 'settings-hidden' : ''} onClick={() => setEditing(true)} />
                </div>
            </div>
            <div className={editing ? 'settings-editing' : 'settings-hidden'}>
                <form onSubmit={updatePassword}>
                    <Input name="current_password" placeholder="Current password" onChange={onCurrentPasswordChange} error={errors.current} type="password" autoComplete="current-password" />

                    <Input name="new_password" placeholder="New password" onChange={onNewPasswordChange} error={errors.new} type="password" autoComplete="new-password" />

                    <Input name="repeat_password" placeholder="Repeat new password" onChange={onRepeatPasswordChange} error={errors.repeat} type="password" autoComplete="new-password" />

                    <div className="settings-editing-buttons">
                        <div className="settings-editing-button">
                            <Button text="Cancel" onClick={cancelEditing} />
                        </div>
                        <div className="settings-editing-button">
                            <Button text="Update" primary type="submit" disabled={(passwords.current.length < 8 || passwords.new.length < 8 || passwords.repeat.length < 8) || (errors.current || errors.new || errors.repeat)} />
                        </div>
                    </div>
                </form>
            </div>
            <div className={loading ? 'loading' : ''}>
                <div className={loading ? 'loader' : ''}></div>
            </div>
        </div>
    )
}

export { SettingsPassword }