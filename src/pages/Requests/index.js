import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'

// Styles
import './requests.sass'

// Components
import { Navbar } from 'components/navbar'
import { Requests } from 'components/pages/requests'

// Actions
import { showSnackbar } from 'actions/snackbar'

class UserRequests extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            requests: [],
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        await axios.get('/users/@me/requests').then(res => {
            this.setState({ requests: res.data.sort((a, b) => { return b.id - a.id }) })
        }).catch(err => this.props.showSnackbar(err, 'error'))
        this.setState({ loading: false })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className={!this.state.loading ? 'requests' : 'requests-hidden'}>
                    <div className="requests-title">Your requests</div>
                    <Requests requests={this.state.requests} />
                </div>
                <div className={this.state.loading ? 'requests-loading' : 'requests-hidden'}></div>
            </div>
        )
    }
}


export default connect(
    null,
    { showSnackbar }
)(UserRequests)
