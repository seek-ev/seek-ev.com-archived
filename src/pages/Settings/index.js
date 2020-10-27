import React from 'react'
import { connect } from 'react-redux'

// Styles
import './settings.sass'

// Actions
import { showSnackbar } from '../../actions/snackbar'

// Components
import { Navbar } from '../../components/navbar'
import { ProfileAvatar } from '../../components/settings/profile/avatar'
import { SettingsProfileUsername } from '../../components/settings/profile/username'

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const me = JSON.parse(localStorage.getItem('s_user'))
        if (me) this.setState({ user: me })
    }

    render() {
        return (
            <div className="landing">
                <Navbar />
                <div className="settings">
                    <div className="settings-menu">
                        <div id="focus" className="settings-menu-item settings-menu-item-choosed">
                            Profile
                        </div>

                        <div className="settings-menu-item settings-menu-item-disabled">
                            Other
                        </div>
                    </div>
                    <div className="settings-item">
                        <div className="settings-header">
                            <ProfileAvatar avatar={this.state.user.avatar} />

                            <SettingsProfileUsername username={this.state.user.username} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Settings)

