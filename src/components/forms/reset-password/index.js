import React from 'react'

// Styles
import './reset_form.sass'

// Components
import Input from '../../basic/input'
import Button from '../../basic/button'

const ResetForm = (props) => {
    const handleSubmit = (e) => {
        props.onSubmit(e.target)
        e.preventDefault();
    }

    const handleEmailInputChange = (e) => {
        props.onEmailChange(e.value)
    }

    return (
        <form onSubmit={props.onSubmit}>
            <div className="reset-input">
                <Input name="email" disabled={props.disabled} error={props.emailError} onChange={handleEmailInputChange} placeholder="Your account email" autoComplete="email" />
            </div>
            <div className="reset-form-buttons">
                <div className="reset-form-button">
                    <Button text="Reset" disabled={props.disabled} primary type="submit" handleClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default ResetForm