import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { ResetPassword } from 'components/pages/reset-password'


// Actions
import { showSnackbar } from 'actions/snackbar'

const ResetPasswordPage = () => {
    const [emailError, setEmailError] = useState(null)
    const [redirect, setRedirect] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()


    const onSubmit = async (e) => {
        e.preventDefault()

        // Validate before submitting
        await handleEmailValidation()

        if (!emailError && email.length > 6) {
            setDisabled(true)

            await axios.post(`/auth/reset/${email}`).then(res => {
                dispatch(showSnackbar('Email successfully sent', 'success'))
                setRedirect('/reset-password/success')
            }).catch(err => {
                setDisabled(false)
                dispatch(showSnackbar(err.response ? err.response.data.message ? err.response.data.message : err.response.data : err.toString(), 'error'))
            })
        }
    }

    const onEmailChange = async (e) => {
        await setEmail(e)
        await handleEmailValidation()
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

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Reset your password</title>
            </Helmet>

            <ResetPassword disabled={disabled} emailError={emailError} onEmailChange={onEmailChange} onSubmit={onSubmit} />
        </Wrapper>
    )
}

export { ResetPasswordPage }
