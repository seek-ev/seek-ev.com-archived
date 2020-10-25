import React from 'react'
import {
    Link,
    Redirect
} from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './register.sass'

// Components
import RegisterForm from '../../components/forms/register'

// Actions
import { showSnackbar } from '../../actions/snackbar'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', email: '', password: '', repeatPassword: '', usernameError: false, emailError: false, passwordError: false, repeatPasswordError: false, disabled: false }
    }

    onSubmit = async (e) => {
        e.preventDefault()

        // Validate before submitting
        await this.handleUsernameValidation()
        await this.handleEmailValidation()
        await this.handlePasswordValidation()
        await this.handleRepeatPasswordValidation()

        if (!this.state.usernameError && !this.state.emailError && !this.state.passwordError && !this.state.repeatPasswordError) {
            this.setState({ disabled: true })
            const expires = new Date()

            await axios.post('/users', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then(async () => {
                await axios.post('/auth/login/tester', { email: this.state.email, password: this.state.password }).then(res => {
                    localStorage.setItem('s_user', JSON.stringify(res.data.data))
                    localStorage.setItem('a_token', res.data.access_token)
                    document.cookie = 'r_token=' + res.data.refresh_token + '; expires=' + new Date(expires.setFullYear(expires.getFullYear() + 1)).toString() + '; SameSite=Strict;'
                    this.setState({ redirect: '/' })
                    this.props.showSnackbar('Welcome to Seek EV!', 'success')
                }).catch(err => {

                    this.props.showSnackbar(err, 'error')
                })
            }).catch(err => {

                // Check if error includes username/email
                if (err.response) {
                    if (err.response.data.error.includes('Username')) {
                        this.setState({ usernameError: 'Username already taken' })
                    }

                    if (err.response.data.error.includes('Email')) {
                        this.setState({ emailError: 'Email already taken' })
                    }
                }

                this.setState({ disabled: false })
                this.props.showSnackbar(err, 'error')
            })
        }

    }

    onUsernameChange = async (e) => {
        await this.setState({ username: e })
        await this.handleUsernameValidation()
    }

    onEmailChange = async (e) => {
        await this.setState({ email: e })
        await this.handleEmailValidation()
    }

    onPasswordChange = async (e) => {
        await this.setState({ password: e })
        await this.handlePasswordValidation()
    }

    onRepeatPasswordChange = async (e) => {
        await this.setState({ repeatPassword: e })
        await this.handleRepeatPasswordValidation()
    }

    handleUsernameValidation() {
        const reg = new RegExp(/[^\x20-\x7E]+/g)
        if (reg.test(this.state.username)) {
            this.setState({ usernameError: 'Remove invalid characters' })
        } else {
            this.setState({ usernameError: false })
        }

        if (this.state.username.length < 4) this.setState({ usernameError: 'Username too short' })
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
        const reg = new RegExp(/[A-Z]+/)

        if (this.state.password.length < 8) {
            this.setState({ passwordError: "Too short, at least 8 characters" })
        } else {
            this.setState({ passwordError: false })
            if (!reg.test(this.state.password)) {
                this.setState({ passwordError: 'Missing at least one capital letter' })
            } else {
                this.setState({ passwordError: false })
            }
        }
    }

    handleRepeatPasswordValidation() {
        if (this.state.repeatPassword !== this.state.password) {
            this.setState({ repeatPasswordError: "Passwords doesn't match" })
        } else {
            this.setState({ repeatPasswordError: false })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="register-container">
                <Link to="/">
                    <img className="register-logo" src="se_dark.png" alt="dark-logo" />
                </Link>
                <div className="register-title">
                    Create new account
                </div>
                <div className="register-form">
                    <RegisterForm
                        onSubmit={this.onSubmit}
                        disabled={this.state.disabled}
                        usernameError={this.state.usernameError}
                        emailError={this.state.emailError}
                        passwordError={this.state.passwordError}
                        repeatPasswordError={this.state.repeatPasswordError}
                        onUsernameChange={this.onUsernameChange}
                        onEmailChange={this.onEmailChange}
                        onPasswordChange={this.onPasswordChange}
                        onRepeatPasswordChange={this.onRepeatPasswordChange}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Register)

