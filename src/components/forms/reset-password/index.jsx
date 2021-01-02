import React from 'react'

// Styles
import './reset_form.sass'

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
        <form onSubmit={onSubmit}>
            <div className="reset-input">
                <Input name="email" disabled={disabled} error={emailError} onChange={handleEmailInputChange} placeholder="Your account email" autoComplete="email" />
            </div>
            <div className="reset-form-buttons">
                <div className="reset-form-button">
                    <Button text="Reset" disabled={disabled} primary type="submit" handleClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default ResetForm