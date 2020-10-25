import React from 'react'
import {
    Redirect
} from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './me.sass'

// Components
import { Navbar } from '../../components/navbar'

// Actions
import { showSnackbar } from '../../actions/snackbar'

class Me extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            me: null,
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })

        await axios.get('/users/@me').then(res => {
            this.setState({ me: res.data })
        }).catch(err => {
            this.props.showSnackbar(err, 'error')
        })

        this.setState({ loading: false })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="landing">
                <Navbar />
                <div className={!this.state.loading ? 'me-page' : 'me-hidden'}>
                    {JSON.stringify(this.state.me)}
                </div>
                <div className={this.state.loading ? 'me-loading' : 'me-hidden'}></div>
            </div>
        )
    }
}


export default connect(
    null,
    { showSnackbar }
)(Me)


