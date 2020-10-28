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
import { SettingsProfileUsername } from '../../components/settings/profile/username'

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        const me = JSON.parse(localStorage.getItem('s_user'))

        await axios.get('/users/@me').then(res => {
            this.setState({ user: res.data })
            this.props.setUser(res.data)
        }).catch(err => {
            this.setState({ user: me })
            this.props.showSnackbar(err, 'error')
        })
        console.log(this.props)
    }

    render() {
        return (
            <div className="landing">
                <Navbar />
                <div className="settings">
                    <SettingsMenu />

                    <div className="settings-item">
                        <div className="settings-header">
                            <ProfileAvatar avatar={this.props.user.avatar} />

                            <SettingsProfileUsername username={this.props.user.username} />
                        </div>
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

