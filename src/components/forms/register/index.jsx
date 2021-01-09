import React from 'react'

// Styles
import { Form, FormButton, FormText, FormInput, FormLink } from './styles'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const RegisterForm = (props) => {
    const handleSubmit = async (e) => {
        await props.onSubmit(e.target)
        await e.preventDefault()
    }

    const handleUsernameInputChange = async (e) => {
        await props.onUsernameChange(e.value)
    }

    const handleEmailInputChange = async (e) => {
        await props.onEmailChange(e.value)
    }

    const handlePasswordInputChange = async (e) => {
        await props.onPasswordChange(e.value)
    }

    const handlePasswordRepeatInputChange = async (e) => {
        await props.onRepeatPasswordChange(e.value)
    }

    return (
        <Form onSubmit={props.onSubmit}>
            <FormInput>
                <Input name="username" disabled={props.disabled} error={props.usernameError} onChange={handleUsernameInputChange} placeholder="Username" autoComplete="none" />
            </FormInput>
            <FormInput>
                <Input name="email" disabled={props.disabled} error={props.emailError} onChange={handleEmailInputChange} placeholder="Email" autoComplete="email" />
            </FormInput>
            <FormInput>
                <Input name="password" disabled={props.disabled} error={props.passwordError} onChange={handlePasswordInputChange} placeholder="Password" type="password" autoComplete="new-password" />
            </FormInput>
            <FormInput>
                <Input name="repeatPassword" disabled={props.disabled} error={props.repeatPasswordError} onChange={handlePasswordRepeatInputChange} placeholder="Repeat password" type="password" autoComplete="new-password" />
            </FormInput>
            <FormText>
                By creating account on this website you accept our <FormLink disabled={props.disabled} to="/terms">Terms of Service</FormLink>.
            </FormText>
            <FormButton>
                <Button text="register" disabled={props.disabled} primary type="submit" handleClick={handleSubmit} />
            </FormButton>
            <FormText>
                Already have one? <FormLink disabled={props.disabled} to="/login">Log in here</FormLink>.
            </FormText>
        </Form>
    )
}

export default RegisterForm