import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './register_form.sass'

// Components
import Input from '../../basic/input'
import Button from '../../basic/button'

const RegisterForm = (props) => {
    const handleSubmit = (e) => {
        props.onSubmit(e.target)
        e.preventDefault()
    }

    const handleUsernameInputChange = (e) => {
        props.onUsernameChange(e.value)
    }

    const handleEmailInputChange = (e) => {
        props.onEmailChange(e.value)
    }

    const handlePasswordInputChange = (e) => {
        props.onPasswordChange(e.value)
    }

    const handlePasswordRepeatInputChange = (e) => {
        props.onRepeatPasswordChange(e.value)
    }

    return (
        <form onSubmit={props.onSubmit}>
            <div className="register-input">
                <Input name="username" disabled={props.disabled} error={props.usernameError} onChange={handleUsernameInputChange} placeholder="Username" autoComplete="username" />
            </div>
            <div className="register-input">
                <Input name="email" disabled={props.disabled} error={props.emailError} onChange={handleEmailInputChange} placeholder="Email" autoComplete="email" />
            </div>
            <div className="register-input">
                <Input name="password" disabled={props.disabled} error={props.passwordError} onChange={handlePasswordInputChange} placeholder="Password" type="password" autoComplete="new-password" />
            </div>
            <div className="register-input">
                <Input name="repeatPassword" disabled={props.disabled} error={props.repeatPasswordError} onChange={handlePasswordRepeatInputChange} placeholder="Repeat password" type="password" autoComplete="new-password" />
            </div>
            <div className="register-text">
                By creating account on this website you accept our <Link to="/terms-of-service">Terms of Service</Link>.
            </div>
            <div className="form-buttons">
                <div className="form-button">
                    <Button text="register" disabled={props.disabled} primary type="submit" handleClick={handleSubmit} />
                </div>
            </div>
            <div className="register-text">
                Already have one? <Link to="/login">Log in here</Link>.
            </div>
        </form>
    )
}

export default RegisterForm