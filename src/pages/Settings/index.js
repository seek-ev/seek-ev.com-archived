import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './settings.sass'

// Actions
import { showSnackbar } from '../../actions/snackbar'
import { setUser } from '../../actions/user'

// Components
import { Navbar } from '../../components/navbar'
import { SettingsMenu } from '../../components/settings/menu'
import { ProfileAvatar } from '../../components/settings/profile/avatar'
import { SettingsPassword } from '../../components/settings/profile/password'
import { SettingsConnections } from '../../components/settings/connections/index'
import { SettingsProfileUsername } from '../../components/settings/profile/username'

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            item: 'connections' // default item
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
    }

    onItemChange(item) {
        this.setState({ item: item })
    }

    render() {
        return (
            <div className="landing">
                <Navbar />
                <div className="settings">
                    <SettingsMenu onChange={this.onItemChange} item={this.state.item} />

                    <div className={this.state.item === 'profile' ? 'settings-item' : 'settings-item-hidden'}>
                        <div className="settings-header">
                            <ProfileAvatar avatar={this.props.user.avatar} />

                            <SettingsProfileUsername username={this.props.user.username} />
                        </div>

                        <div className="settings-item-details">
                            <div className="settings-item-details-item">
                                <div className="settings-item-title">
                                    Your email:
                                </div>
                                <div className="settings-email">
                                    {this.props.user.email}
                                </div>
                            </div>

                            <div className="settings-item-details-item">
                                <SettingsPassword />
                            </div>
                        </div>
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

