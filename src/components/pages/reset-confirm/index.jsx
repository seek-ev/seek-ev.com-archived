import React from 'react'

// Styles
import { Container, HomeLink, Logo, Title, Form } from 'pages/reset-confirm/styles'

// Components
import ResetConfirmForm from 'components/forms/reset-confirm'

const ResetConfirm = ({ disabled, passwordError, repeatPasswordError, onPasswordChange, onPasswordRepeatChange, onSubmit }) => {
    return (
        <Container>
            <HomeLink to="/" disabled={disabled}>
                <Logo src="/se_dark.png" alt="dark-logo" />
            </HomeLink>
            <Title>
                Set your new password
            </Title>
            <Form>
                <ResetConfirmForm disabled={disabled} passwordError={passwordError} passwordRepeatError={repeatPasswordError} onPasswordChange={onPasswordChange} onRepeatPasswordChange={onPasswordRepeatChange} onSubmit={onSubmit} />
            </Form>
        </Container>
    )
}

export { ResetConfirm }