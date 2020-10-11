import React from 'react'

// Styles
import './login_form.sass'

// Components
import Input from '../../basic/input'
import Button from '../../basic/button'


const LoginForm = (props) => {    
    const handleSubmit = (e) => {
        props.onSubmit(e.target)
        e.preventDefault();
    }

    const handleEmailInputChange = (e) => {
        props.onEmailChange(e.value)
    } 

    const handlePasswordInputChange = (e) => {
        props.onPasswordChange(e.value)
    } 

    return (
    <form onSubmit={props.onSubmit}>
        <div className="login-input">
            <Input name="email"  disabled={props.disabled} onChange={handleEmailInputChange} placeholder="Email" autoComplete="email" />
        </div>
        <div className="login-input">
            <Input name="password"  disabled={props.disabled} onChange={handlePasswordInputChange} placeholder="Password" type="password" autoComplete="current-password" />
        </div>
        <div className="form-buttons">
            <div className="form-button">
                <Button text="register" disabled={props.disabled} clean />
            </div>
            <div className="form-button">
                <Button text="login" disabled={props.disabled} primary type="submit" handleClick={handleSubmit} />
            </div>
        </div>
    </form>
    )
}

export default LoginForm