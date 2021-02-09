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

        if (!password) return await setPasswordError('Password is required')
        if (!repeatPassword) return await setRepeatPasswordError('You have to repeat your password!')

        if (!passwordError && !repeatPasswordError) {
            setDisabled(true)
            await axios.post(`/auth/reset-confirm`, {
                password: password
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(res => {
                    dispatch(showSnackbar('Email successfully sent', 'success'))
                    setRedirect('/reset/success')
                }).catch(err => {
                    setDisabled(false)
                    dispatch(showSnackbar(err, 'error'))
                })
        }
    }

    const onPasswordChange = async (e) => {
        await setPassword(e)
        await handlePasswordValidation(e)
    }

    const onPasswordRepeatChange = async (e) => {
        await setRepeatPassword(e)
        await handleRepeatPasswordValidation(e)
    }

    const handlePasswordValidation = (passwd) => {
        const reg = new RegExp(/[A-Z]+/)

        if (passwd.length < 8) {
            setPasswordError("Too short, at least 8 characters")
        } else {
            setPasswordError(false)
            if (!reg.test(passwd)) {
                setPasswordError('Missing at least one capital letter')
            } else {
                setPasswordError(false)
            }
        }
    }

    const handleRepeatPasswordValidation = async (rep) => {
        if (rep !== password) {
            await setRepeatPasswordError("Passwords doesn't match")
        } else {
            await setRepeatPasswordError(false)
        }

        if (rep.length < 8) return setRepeatPasswordError('You have to repeat your password')
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Confirm password reset</title>
            </Helmet>

            <ResetConfirm disabled={disabled} passwordError={passwordError} repeatPasswordError={repeatPasswordError} onPasswordChange={onPasswordChange} onPasswordRepeatChange={onPasswordRepeatChange} onSubmit={onSubmit} />
        </Wrapper>
    )
}

export { ResetConfirmPage }