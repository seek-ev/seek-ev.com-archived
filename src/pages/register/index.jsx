import React, { useState } from 'react'
import {
    Redirect
} from "react-router-dom"
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

// Styles
import { Wrapper } from './styles'

// Components
import { Register } from 'components/pages/register'

// Actions
import { loginUser } from 'actions/auth'
import { showSnackbar } from 'actions/snackbar'

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [repeatPassword, setRepeatPassword] = useState('')
    const dispatch = useDispatch()


    // Errors
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [repeatPasswordError, setRepeatPasswordError] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        // Validate before submitting
        await handleUsernameValidation()
        await handleEmailValidation()
        await handlePasswordValidation()
        await handleRepeatPasswordValidation()

        if (!usernameError && !emailError && !passwordError && !repeatPasswordError) {
            await setDisabled(true)

            await axios.post('/users', {
                username,
                email,
                password
            }).then(async () => {
                await axios.post('/auth/login/tester', { email, password }, { withCredentials: true }).then(res => {
                    setRedirect('/')
                    dispatch(loginUser(res.data.data, res.data.access_token))
                    dispatch(showSnackbar('Welcome to Seek EV!', 'success'))
                }).catch(err => {
                    dispatch(showSnackbar(err, 'error'))
                })
            }).catch(async err => {
                // Check if error includes username/email
                if (err.response) {
                    console.log(err.response.error)
                    if (err.response.data.error.includes('Username')) {
                        setUsernameError('Username already taken')
                    }

                    if (err.response.data.error.includes('Email')) {
                        setEmailError('Email already taken')
                    }
                }
                await setDisabled(false)
                await dispatch(showSnackbar(err, 'error'))
            })
        }
    }

    const onUsernameChange = async (e) => {
        await setUsername(e)
        await handleUsernameValidation()
    }

    const onEmailChange = async (e) => {
        await setEmail(e)
        await handleEmailValidation()
    }

    const onPasswordChange = async (e) => {
        await setPassword(e)
        await handlePasswordValidation()
    }

    const onRepeatPasswordChange = async (e) => {
        await setRepeatPassword(e)
        await handleRepeatPasswordValidation()
    }

    const handleUsernameValidation = () => {
        const reg = new RegExp(/[^\x20-\x7E]+/g)
        if (reg.test(username)) {
            setUsernameError('Remove invalid characters')
        } else {
            setUsernameError(false)
        }

        if (username.length < 4) setUsernameError('Username too short')
    }

    const handleEmailValidation = () => {
        const reg = new RegExp((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        if (!reg.test(email)) {
            setEmailError('Incorrect email')
        } else {
            setEmailError(false)
        }

        if (email.length < 6) setEmailError('Email is required')
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
                <title>Register</title>

                <meta property="og:title" content="Create Seek EV account" />
            </Helmet>

            <Register
                onSubmit={onSubmit}
                disabled={disabled}
                usernameError={usernameError}
                emailError={emailError}
                passwordError={passwordError}
                repeatPasswordError={repeatPasswordError}
                onUsernameChange={onUsernameChange}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onRepeatPasswordChange={onRepeatPasswordChange}
            />
        </Wrapper>
    )
}

export { RegisterPage }