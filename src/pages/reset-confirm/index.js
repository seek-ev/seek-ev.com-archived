import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Styles
import './reset.sass'

// Actions
import { showSnackbar } from 'actions/snackbar'

// Components
import ResetConfirmForm from 'components/forms/reset-confirm'

class Reset extends React.Component {
    constructor(props) {
        super(props)

        this.state = { token: '', password: '', passwordError: false, repeatPassword: '', repeatPasswordError: false, disabled: false }
    }

    componentDidMount() {
        if (this.props.location.hash) this.setState({ token: this.props.location.hash.replace('#token=', '') })
    }

    onSubmit = async (e) => {
        e.preventDefault()

        // Validate before submitting
        await this.handlePasswordValidation()
        await this.handleRepeatPasswordValidation()

        if (!this.state.passwordError && !this.state.passwordRepeatError) {
            this.setState({ disabled: true })

            await axios.post(`/auth/reset-confirm`, {
                password: this.state.password
            },
                {
                    headers: {
                        'Authorization': this.state.token
                    }
                }).then(res => {
                    this.props.showSnackbar('Email successfully sent', 'success')
                    this.setState({ redirect: '/reset/success' })
                }).catch(err => {
                    this.setState({ disabled: false })
                    this.props.showSnackbar((err.response && err.response.status === 401) ? 'Token expired' : err, 'error')
                })
        }
    }

    onPasswordChange = async (e) => {
        await this.setState({ password: e })
        await this.handlePasswordValidation()
    }

    onPasswordRepeatChange = async (e) => {
        await this.setState({ repeatPassword: e })
        await this.handleRepeatPasswordValidation()
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
            <div className="reset-confirm-container">
                <Link to="/">
                    <img className="reset-confirm-logo" src="/se_dark.png" alt="dark-logo" />
                </Link>
                <div className="reset-confirm-title">
                    Set your new password
                </div>
                <div className="reset-form">
                    <ResetConfirmForm disabled={this.state.disabled} passwordError={this.state.passwordError} passwordRepeatError={this.state.repeatPasswordError} onPasswordChange={this.onPasswordChange} onRepeatPasswordChange={this.onPasswordRepeatChange} onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Reset)

