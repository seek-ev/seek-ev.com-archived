import React from 'react'

// Styles
import './reset_form.sass'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const ResetConfirmForm = (props) => {
    const handleSubmit = (e) => {
        props.onSubmit(e.target)
        e.preventDefault()
    }

    const handlePasswordChange = (e) => {
        props.onPasswordChange(e.value)
    }

    const handleRepeatPasswordChange = (e) => {
        props.onRepeatPasswordChange(e.value)
    }

    return (
        <form onSubmit={props.onSubmit}>
            <div className="reset-confirm-input">
                <Input name="password" type="password" disabled={props.disabled} error={props.passwordError} onChange={handlePasswordChange} placeholder="New password" autoComplete="new-password" />
            </div>
            <div className="reset-confirm-input">
                <Input name="passwordRepeat" type="password" disabled={props.disabled} error={props.passwordRepeatError} onChange={handleRepeatPasswordChange} placeholder="Repeat new password" autoComplete="new-password" />
            </div>
            <div className="reset-confirm-form-buttons">
                <div className="reset-confirm-form-button">
                    <Button text="Update" disabled={props.disabled} primary type="submit" handleClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default ResetConfirmForm