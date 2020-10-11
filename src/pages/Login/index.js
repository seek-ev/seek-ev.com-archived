import React from 'react'
import {
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios'

// Styles
import './login.sass'

// Components
import LoginForm from '../../components/forms/login'



export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '', submitted: false }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({ submitted: true })
     
        await axios.post('/auth/login', { email: this.state.email, password: this.state.password }).then(res => {
            localStorage.setItem('s_user', JSON.stringify(res.data.data))
            localStorage.setItem('a_token', res.data.access_token)
            this.setState({ redirect: '/' })
        }).catch(err => console.log(err))
    
        await this.setState({ submitted: false })
    }

    onEmaiLChange = (e) => {
       this.setState({ email: e })
    } 

    onPasswordChange = (e) => {
       this.setState({ password: e })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="login-container">
                <img className="login-logo" src="se_dark.png" alt="dark-logo" />
                <div className="login-title">
                  Sign in
                </div>
                <div className="login-form">
                    <LoginForm disabled={this.state.submitted} onEmailChange={this.onEmaiLChange} onPasswordChange={this.onPasswordChange} onSubmit={this.onSubmit} user={this.state.user}></LoginForm>
                </div>
                <div className="login-forgot-password">
                    <Link disabled={true} to={this.state.submitted ? '#' : 'reset-password'} className="login-forgot-password-btn">Forgot password?</Link>
                </div>
            </div>
        )
    }
}