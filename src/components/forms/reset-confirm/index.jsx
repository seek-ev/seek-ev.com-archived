import React from 'react'

// Styles
import { Form, FormButtons, FormButton, FormInput } from './styles'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const ResetConfirmForm = ({ disabled, onSubmit, onPasswordChange, onRepeatPasswordChange, passwordError, passwordRepeatError }) => {
    const handleSubmit = (e) => {
        onSubmit(e.target)
        e.preventDefault()
    }

    const handlePasswordChange = (e) => {
        onPasswordChange(e.value)
    }

    const handleRepeatPasswordChange = (e) => {
        onRepeatPasswordChange(e.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormInput>
                <Input name="password" type="password" disabled={disabled} error={passwordError} onChange={handlePasswordChange} placeholder="New password" autoComplete="new-password" />
            </FormInput>
            <FormInput>
                <Input name="passwordRepeat" type="password" disabled={disabled} error={passwordRepeatError} onChange={handleRepeatPasswordChange} placeholder="Repeat new password" autoComplete="new-password" />
            </FormInput>
            <FormButtons>
                <FormButton>
                    <Button text="Update" disabled={disabled} primary type="submit" handleClick={handleSubmit} />
                </FormButton>
            </FormButtons>
        </Form>
    )
}

export default ResetConfirmForm