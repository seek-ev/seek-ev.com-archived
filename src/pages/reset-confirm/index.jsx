import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { ResetConfirm } from 'components/pages/reset-confirm'

// Actions
import { showSnackbar } from 'actions/snackbar'

const ResetConfirmPage = () => {
    const [disabled, setDisabled] = useState(false)
    const [redirect, setRedirect] = useState(null)
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [token, setToken] = ('')
    const dispatch = useDispatch()
    const location = useLocation()

    // Errors
    const [passwordError, setPasswordError] = useState(false)
    const [repeatPasswordError, setRepeatPasswordError] = useState(false)

    useEffect(() => {
        if (location.hash) setToken(location.hash.replace('#token=', ''))
    }, [location])

    const onSubmit = async (e) => {
        e.preventDefault()

        // Validate before submitting
        await handlePasswordValidation()
        await handleRepeatPasswordValidation()

        if ((!passwordError && !repeatPasswordError) && (password.length > 8 && repeatPassword.length > 8)) {
            setDisabled(true)

            await axios.post(`/auth/reset-confirm`, {
                password: password
            },
                {
                    headers: {
                        'Authorization': token
                    }
                }).then(res => {
                    dispatch(showSnackbar('Email successfully sent', 'success'))
                    setRedirect('/reset/success')
                }).catch(err => {
                    setDisabled(false)
                    dispatch(showSnackbar((err.response && err.response.status === 401) ? 'Token expired' : err, 'error'))
                })
        }
    }

    const onPasswordChange = async (e) => {
        await setPassword(e)
        await handlePasswordValidation()
    }

    const onPasswordRepeatChange = async (e) => {
        await setRepeatPassword(e)
        await handleRepeatPasswordValidation()
    }

    const handlePasswordValidation = () => {
        const reg = new RegExp(/[A-Z]+/)

        if (password.length < 8) {
            setPasswordError("Too short, at least 8 characters")
        } else {
            setPasswordError(false)
            if (!reg.test(password)) {
                setPasswordError('Missing at least one capital letter')
            } else {
                setPasswordError(false)
            }
        }
    }

    const handleRepeatPasswordValidation = () => {
        if (repeatPassword !== password) {
            setRepeatPasswordError("Passwords doesn't match")
        } else {
            setRepeatPasswordError(false)
        }
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Confirm password reset</title>
            </Helmet>

            <ResetConfirm disabled={disabled} passwordError={passwordError} passwordRepeatError={repeatPasswordError} onPasswordChange={onPasswordChange} onPasswordRepeatChange={onPasswordRepeatChange} onSubmit={onSubmit} />
        </Wrapper>
    )
}

export { ResetConfirmPage }