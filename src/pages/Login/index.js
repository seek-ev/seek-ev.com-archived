import React from 'react'
import {
    Link,
    Redirect
} from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './login.sass'

// Components
import LoginForm from '../../components/forms/login'

// Actions
import { loginUser } from '../../actions/auth'
import { showSnackbar } from '../../actions/snackbar'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '', emailError: false, passwordError: false, disabled: false }
    }

    onSubmit = async (e) => {
        e.preventDefault()

        // Validate before submitting
        await this.handleEmailValidation()
        await this.handlePasswordValidation()

        if (!this.state.emailError && !this.state.passwordError) {
            this.setState({ disabled: true })

            await axios.post('/auth/login/tester', { email: this.state.email, password: this.state.password }).then(res => {
                this.props.loginUser(res.data.data, res.data.access_token, res.data.refresh_token)
                this.setState({ redirect: '/' })
            }).catch(err => {
                this.setState({ disabled: false })
                this.props.showSnackbar(err, 'error')
            })
        }
    }

    onEmaiLChange = async (e) => {
        await this.setState({ email: e })
        await this.handleEmailValidation()
    }

    onPasswordChange = async (e) => {
        await this.setState({ password: e })
        await this.handlePasswordValidation()
    }

    handleEmailValidation() {
        const reg = new RegExp((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        if (!reg.test(this.state.email)) {
            this.setState({ emailError: 'Incorrect email' })
        } else {
            this.setState({ emailError: false })
        }

        if (this.state.email.length < 6) this.setState({ emailError: 'Email is required' })
    }

    handlePasswordValidation() {
        if (this.state.password.length < 6) {
            this.setState({ passwordError: 'Password is required' })
        } else {
            this.setState({ passwordError: false })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="login-container">
                <Link to="/">
                    <img className="login-logo" src="se_dark.png" alt="dark-logo" />
                </Link>
                <div className="login-title">
                    Sign in
                </div>
                <div className="login-form">
                    <LoginForm disabled={this.state.disabled} emailError={this.state.emailError} passwordError={this.state.passwordError} onEmailChange={this.onEmaiLChange} onPasswordChange={this.onPasswordChange} onSubmit={this.onSubmit} />
                </div>
                <div className="login-forgot-password">
                    <Link disabled={true} to={this.state.disabled ? '#' : 'reset-password'} className="login-forgot-password-btn">Forgot password?</Link>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { loginUser, showSnackbar }
)(Login)

