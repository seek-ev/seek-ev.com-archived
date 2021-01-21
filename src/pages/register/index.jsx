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


        if (!username) return await setUsernameError('Username required')
        if (!email) return await setEmailError('Email required')
        if (!password) return await setPasswordError('Password required')
        if (!repeatPassword) return await setRepeatPasswordError('You have to repeat your password')

        if (usernameError) return
        if (emailError) return
        if (passwordError) return
        if (repeatPasswordError) return

        await setDisabled(true)

        await axios.post('/users', {
            username,
            email,
            password
        }).then(async () => {
            await axios.post('/auth/login/tester', { email, password }, { withCredentials: true }).then(res => {
                dispatch(loginUser(res.data.data, res.data.access_token))
                setRedirect('/home')
                dispatch(showSnackbar('Welcome to Seek EV!', 'success'))
            }).catch(err => {
                dispatch(showSnackbar(err, 'error'))
            })
        }).catch(async err => {
            // Check if error includes username/email
            if (err.response) {
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

    const onUsernameChange = async (e) => {
        await setUsername(e)
        await handleUsernameValidation(e)
    }

    const onEmailChange = async (e) => {
        await setEmail(e)
        await handleEmailValidation(e)
    }

    const onPasswordChange = async (e) => {
        await setPassword(e)
        await handlePasswordValidation(e)
    }

    const onRepeatPasswordChange = async (e) => {
        await setRepeatPassword(e)
        await handleRepeatPasswordValidation(e)
    }

    async function handleUsernameValidation(name) {
        const reg = new RegExp(/[^\x20-\x7E]+/g)
        if (await reg.test(name)) {
            return await setUsernameError('Remove invalid characters')
        } else {
            await setUsernameError(false)
        }

        if (name.length < 4) return await setUsernameError('Username too short')
    }

    async function handleEmailValidation(em) {
        const reg = new RegExp((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        if (!reg.test(em)) {
            return setEmailError('Incorrect email')
        } else {
            setEmailError(false)
        }

        if (em.length < 6) return setEmailError('Email is required')
    }

    async function handlePasswordValidation(passwd) {
        const reg = new RegExp(/[A-Z]+/)

        if (passwd.length < 8) {
            return setPasswordError("Too short, at least 8 characters")
        } else {
            setPasswordError(false)
            if (!reg.test(passwd)) {
                return setPasswordError('Missing at least one capital letter')
            } else {
                setPasswordError(false)
            }
        }
    }

    async function handleRepeatPasswordValidation(rep) {
        if (rep !== password) {
            return setRepeatPasswordError("Passwords doesn't match")
        } else {
            setRepeatPasswordError(false)
        }

        if (rep.length < 8) return setRepeatPasswordError('You have to repeat your password')
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