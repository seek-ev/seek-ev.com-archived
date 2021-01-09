import React from 'react'

// Styles
import { Wrapper, HomeLink, Logo, Title, Form } from './styles'

// Components
import ResetForm from 'components/forms/reset-password'

const ResetPassword = ({ disabled, emailError, onEmailChange, onSubmit }) => {
    return (
        <Wrapper>
            <HomeLink to="/" disabled={disabled}>
                <Logo src="se_dark.png" alt="dark-logo" />
            </HomeLink>
            <Title>
                Reset your password
            </Title>
            <Form>
                <ResetForm disabled={disabled} emailError={emailError} onEmailChange={onEmailChange} onSubmit={onSubmit} />
            </Form>
        </Wrapper>
    )
}

export { ResetPassword }