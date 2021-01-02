import React from 'react'

// Styles
import { Form, FormButtons, FormButton, FormInput } from './styles'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const ResetForm = ({ disabled, onSubmit, onEmailChange, emailError }) => {
    const handleSubmit = (e) => {
        onSubmit(e.target)
        e.preventDefault()
    }

    const handleEmailInputChange = (e) => {
        onEmailChange(e.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormInput>
                <Input name="email" disabled={disabled} error={emailError} onChange={handleEmailInputChange} placeholder="Your account email" autoComplete="email" />
            </FormInput>
            <FormButtons>
                <FormButton>
                    <Button text="Reset" disabled={disabled} primary type="submit" handleClick={handleSubmit} />
                </FormButton>
            </FormButtons>
        </Form>
    )
}

export default ResetForm