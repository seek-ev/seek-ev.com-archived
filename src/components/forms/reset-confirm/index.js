import React from 'react'

// Styles
import './reset_form.sass'

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
        <form onSubmit={onSubmit}>
            <div className="reset-confirm-input">
                <Input name="password" type="password" disabled={disabled} error={passwordError} onChange={handlePasswordChange} placeholder="New password" autoComplete="new-password" />
            </div>
            <div className="reset-confirm-input">
                <Input name="passwordRepeat" type="password" disabled={disabled} error={passwordRepeatError} onChange={handleRepeatPasswordChange} placeholder="Repeat new password" autoComplete="new-password" />
            </div>
            <div className="reset-confirm-form-buttons">
                <div className="reset-confirm-form-button">
                    <Button text="Update" disabled={disabled} primary type="submit" handleClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default ResetConfirmForm