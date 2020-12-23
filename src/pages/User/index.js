import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './user.sass'

// Components
import { Navbar } from 'components/navbar'
import { UserAvatar } from 'components/pages/user/avatar'
import { UserBadges } from 'components/pages/user/badges'
import { UserUsername } from 'components/pages/user/username'
import { DetailsMenu } from 'components/pages/user/details/menu'
import { DetailsCars } from 'components/pages/user/details/cars'

// Actions
import { showSnackbar } from 'actions/snackbar'

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            previousUsername: '',
            user: {},
            item: 'cars' // default item displayed
        }

        this.onItemChange = this.onItemChange.bind(this)
    }

    async componentDidMount() {
        this.setState({ loading: true })

        if (!this.props.match.params.username) return

        await axios.get(`/users/username/${this.props.match.params.username}`).then(res => {
            this.setState({ user: res.data, previousUsername: res.data.username })
        }).catch(err => {
            if (err.response && err.response.status === 404) return
            this.props.showSnackbar(err, 'error')
        })

        this._ismounted = true

        if (this.state.user) document.title = this.state.user.username

        this.setState({ loading: false })
    }

    async componentDidUpdate() {
        if ((this._ismounted && !this.state.loading) && (this.props.match.params.username.toLowerCase() !== this.state.previousUsername.toLowerCase())) {
            this.setState({ loading: true })

            this.setState({ previousUsername: this.props.match.params.username })
            await axios.get(`/users/username/${this.props.match.params.username}`).then(res => {
                this.setState({ user: res.data, previousUsername: res.data.username })
            }).catch(err => {
                if (err.response && err.response.status === 404) return
                this.props.showSnackbar(err, 'error')
            })

            if (this.state.user) document.title = this.state.user.username

            this.setState({ loading: false })
        }
    }

    componentWillUnmount() {
        document.title = 'Seek EV'
    }

    onItemChange(item) {
        this.setState({ item })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className={(this.state.loading || Object.keys(this.state.user).length === 0) ? 'user-hidden' : 'user-landing'}>
                    <div className="user-header">
                        <UserAvatar avatar={this.state.user.avatar} />
                        <div className="user-header-details">
                            <UserUsername username={this.state.user.username} />
                            <UserBadges flags={this.state.user.flags} />
                        </div>
                    </div>
                    <div className="user-details">
                        <DetailsMenu itemChange={this.onItemChange} />
                        <div className="user-details-item">
                            <DetailsCars cars={this.state.user.cars} />
                        </div>
                    </div>
                </div>
                <div className={!this.state.loading && Object.keys(this.state.user).length <= 0 ? 'user-not-found' : 'user-hidden'}>
                    <div className="user-not-found-title">
                        User <span>{this.props.match.params.username}</span> was not found :(
                    </div>
                </div>
                <div className={this.state.loading ? 'user-loading' : 'user-hidden'}></div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(User)

