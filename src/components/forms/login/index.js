import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './login_form.sass'

// Components
import { Input } from 'components/basic/input'
import { Button } from 'components/basic/button'

const LoginForm = ({ disabled, emailError, passwordError, onEmailChange, onPasswordChange, onSubmit }) => {
    const handleSubmit = (e) => {
        onSubmit(e.target)
        e.preventDefault()
    }

    const handleEmailInputChange = (e) => {
        onEmailChange(e.value)
    }

    const handlePasswordInputChange = (e) => {
        onPasswordChange(e.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="login-input">
                <Input name="email" disabled={disabled} error={emailError} onChange={handleEmailInputChange} placeholder="Email" autoComplete="email" />
            </div>
            <div className="login-input">
                <Input name="password" disabled={disabled} error={passwordError} onChange={handlePasswordInputChange} placeholder="Password" type="password" autoComplete="current-password" />
            </div>
            <div className="form-buttons">
                <div className="form-button">
                    <Link to="/register">
                        <Button text="register" disabled={disabled} clean />
                    </Link>
                </div>
                <div className="form-button">
                    <Button text="login" disabled={disabled} primary type="submit" handleClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default LoginForm