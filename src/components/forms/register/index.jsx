import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { Form, FormButton, FormText, FormInput } from './styles'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const RegisterForm = (props) => {
    const handleSubmit = (e) => {
        props.onSubmit(e.target)
        e.preventDefault()
    }

    const handleUsernameInputChange = (e) => {
        props.onUsernameChange(e.value)
    }

    const handleEmailInputChange = (e) => {
        props.onEmailChange(e.value)
    }

    const handlePasswordInputChange = (e) => {
        props.onPasswordChange(e.value)
    }

    const handlePasswordRepeatInputChange = (e) => {
        props.onRepeatPasswordChange(e.value)
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
                By creating account on this website you accept our <Link to="/terms">Terms of Service</Link>.
            </FormText>
            <FormButton>
                <Button text="register" disabled={props.disabled} primary type="submit" handleClick={handleSubmit} />
            </FormButton>
            <FormText>
                Already have one? <Link to="/login">Log in here</Link>.
            </FormText>
        </Form>
    )
}

export default RegisterForm