import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './settings.sass'

// Actions
import { showSnackbar } from 'actions/snackbar'
import { setUser } from 'actions/user'

// Components
import { Navbar } from 'components/navbar'
import { SettingsMenu } from 'components/settings/menu'
import { SettingsProfile } from 'components/settings/profile'
import { SettingsConnections } from 'components/settings/connections/index'

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            item: 'profile' // default item
        }

        this.onItemChange = this.onItemChange.bind(this)
    }

    async componentDidMount() {
        const me = JSON.parse(localStorage.getItem('s_user'))
        if (this.props.location.search) {
            return this.setState({ item: 'connections' })
        }

        await axios.get('/users/@me').then(res => {
            this.setState({ user: res.data })
            this.props.setUser(res.data)
        }).catch(err => {
            this.setState({ user: me })
            this.props.showSnackbar(err, 'error')
        })

        document.title = `Settings - ${this.state.item.charAt(0).toUpperCase() + this.state.item.slice(1)}`
    }

    componentWillUnmount() {
        document.title = 'Seek EV'
    }

    onItemChange(item) {
        document.title = `Settings - ${item.charAt(0).toUpperCase() + item.slice(1)}`
        this.setState({ item: item })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="settings">
                    <SettingsMenu onChange={this.onItemChange} item={this.state.item} />

                    <div className={this.state.item === 'profile' ? 'settings-item' : 'settings-item-hidden'}>
                        <SettingsProfile user={this.props.user} />
                    </div>

                    <div className={this.state.item === 'connections' ? 'settings-item' : 'settings-item-hidden'}>
                        <SettingsConnections params={this.props.location.search} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(
    mapStateToProps,
    { setUser, showSnackbar }
)(Settings)

