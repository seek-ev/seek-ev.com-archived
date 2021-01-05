import React from 'react'

// Styles
import { Wrapper, PageLink, Image, Form, Title } from './styles'

// Components
import RegisterForm from 'components/forms/register'

const Register = ({ disabled, onSubmit, usernameError, emailError, passwordError, repeatPasswordError, onUsernameChange, onEmailChange, onPasswordChange, onRepeatPasswordChange }) => {
    return (
        <Wrapper>
            <PageLink to="/">
                <Image src="se_dark.png" alt="dark-logo" />
            </PageLink>
            <Title>
                Create new account
            </Title>
            <Form>
                <RegisterForm
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
            </Form>
        </Wrapper>
    )
}

export { Register }