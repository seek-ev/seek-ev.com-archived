import React, { useState } from 'react'
import {
    Redirect
} from "react-router-dom"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { Login } from 'components/pages/login'

// Actions
import { loginUser } from 'actions/auth'
import { showSnackbar } from 'actions/snackbar'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [redirect, setRedirect] = useState(null)
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!email) return await setEmailError('Email is required')
        if (!password) return await setPasswordError('Password is required')

        // Validate before submitting
        await handleEmailValidation()
        await handlePasswordValidation()

        if (!emailError && !passwordError) {
            setDisabled(true)

            await axios.post('/auth/login/tester', { email: email, password: password }, { withCredentials: true }).then(async res => {
                dispatch(loginUser(res.data.data, res.data.access_token))
                setRedirect('/home')
            }).catch(err => {
                setDisabled(false)
                dispatch(showSnackbar(err, 'error'))
            })
        }
    }

    const onEmaiLChange = async (e) => {
        await setEmail(e)
        await handleEmailValidation()
    }

    const onPasswordChange = async (e) => {
        await setPassword(e)
        await handlePasswordValidation()
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
        if (password.length < 6) {
            setPasswordError('Password is required')
        } else {
            setPasswordError(false)
        }
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Welcome back!</title>

                <meta property="og:title" content="Log in to Seek EV" />
            </Helmet>

            <Login disabled={disabled} emailError={emailError} passwordError={passwordError} onEmailChange={onEmaiLChange} onPasswordChange={onPasswordChange} onSubmit={onSubmit} />
        </Wrapper>
    )
}

export { LoginPage }