import React from 'react'

// Styles
import { Wrapper, PageLink, Logo, Title, Form, ForgotButton, ResetLink } from './styles'

// Components
import LoginForm from 'components/forms/login'

const Login = ({ disabled, emailError, passwordError, onEmailChange, onPasswordChange, onSubmit }) => {
    return (
        <Wrapper>
            <PageLink to="/">
                <Logo src="se_dark.png" alt="dark-logo" />
            </PageLink>
            <Title>
                Sign in
            </Title>
            <Form>
                <LoginForm disabled={disabled} emailError={emailError} passwordError={passwordError} onEmailChange={onEmailChange} onPasswordChange={onPasswordChange} onSubmit={onSubmit} />
            </Form>
            <ForgotButton>
                <ResetLink disabled={disabled} to={disabled ? '#' : 'reset-password'}>Forgot password?</ResetLink>
            </ForgotButton>
        </Wrapper>
    )
}

export { Login }