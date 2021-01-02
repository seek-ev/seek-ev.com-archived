import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { Form, Buttons, FormButton, LoginInput } from './styles'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const LoginForm = ({ disabled, emailError, passwordError, onEmailChange, onPasswordChange, onSubmit }) => {
    const handleSubmit = (e) => {
        onSubmit(e.target)
        e.preventDefault()
    }

    const handleEmailInputChange = (e) => {
        onEmailChange(e.value)
    }

    const handlePasswordInputChange = (e) => {
        onPasswordChange(e.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <LoginInput>
                <Input name="email" disabled={disabled} error={emailError} onChange={handleEmailInputChange} placeholder="Email" autoComplete="email" />
            </LoginInput>
            <LoginInput>
                <Input name="password" disabled={disabled} error={passwordError} onChange={handlePasswordInputChange} placeholder="Password" type="password" autoComplete="current-password" />
            </LoginInput>
            <Buttons>
                <FormButton>
                    <Link to="/register">
                        <Button text="register" disabled={disabled} clean />
                    </Link>
                </FormButton>
                <FormButton>
                    <Button text="login" disabled={disabled} primary type="submit" handleClick={handleSubmit} />
                </FormButton>
            </Buttons>
        </Form>
    )
}

export default LoginForm