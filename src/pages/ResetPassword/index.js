import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Styles
import './reset.sass'

// Actions
import { showSnackbar } from '../../actions/snackbar'

// Components
import ResetForm from '../../components/forms/reset-password'

class ResetPassword extends React.Component {
    constructor(props) {  
        super(props)
        this.state = { email: '', emailError: false, disabled: false }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        
        // Validate before submitting
        await this.handleEmailValidation()

        if (!this.state.emailError) {
            this.setState({ disabled: true })
        
            await axios.post(`/auth/reset/${this.state.email}`).then(res => {
                this.props.showSnackbar('Email successfully sent', 'success')
                this.setState({ redirect: '/reset-password/success' })
            }).catch(err => { 
                this.setState({ disabled: false })
                this.props.showSnackbar(err.response ? err.response.data.message ? err.response.data.message : err.response.data : err.toString(), 'error')
            })
        }
    }

    onEmaiLChange = async (e) => {
        await this.setState({ email: e })
        await this.handleEmailValidation()
    }

    handleEmailValidation() {
        const reg = new RegExp((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        if (!reg.test(this.state.email)) {
            this.setState({ emailError: 'Icorrect email' })
        } else {
            this.setState({ emailError: false })
        }

        if (this.state.email.length < 6) this.setState({ emailError: 'Email is required' }) 
    }

    render () {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="reset-container">
                <Link to="/">
                    <img className="reset-logo" src="se_dark.png" alt="dark-logo" />
                </Link>
                <div className="reset-title">
                  Reset your password
                </div>
                <div className="reset-form">
                    <ResetForm disabled={this.state.disabled} emailError={this.state.emailError} passwordError={this.state.passwordError} onEmailChange={this.onEmaiLChange} onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
  )(ResetPassword)
  
  