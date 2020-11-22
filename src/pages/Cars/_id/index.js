import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Styles
import './car.sass'

// Components
import { Navbar } from '../../../components/navbar'
import { UserCarComponent } from '../../../components/cars/car'

// Actions
import { showSnackbar } from '../../../actions/snackbar'

class UserCar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            car: {},
            currentCar: 0
        }
    }

    async componentDidMount() {
        this.setState({ loading: true, currentCar: this.props.match.params.id })

        await axios.get(`/cars/id/${this.props.match.params.id}`).then(res => {

            this.setState({ car: res.data })

        }).catch(err => this.props.showSnackbar(err, 'error'))

        this._ismounted = true
        this.setState({ loading: false })
    }

    async componentDidUpdate() {
        if ((this._ismounted && !this.state.loading) && (this.props.match.params.id !== this.state.currentCar)) {
            this.setState({ loading: true })

            await axios.get(`/cars/id/${this.props.match.params.id}`).then(res => this.setState({ car: res.data })).catch(err => this.props.showSnackbar(err, 'error'))

            this.setState({ loading: false })
        }
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className={`${!this.state.loading && this.state.car.user && this.state.car.user.username === this.props.username ? 'user-car-container' : 'user-car-hidden'}`}>
                    <div className="user-car-header">
                        <UserCarComponent car={this.state.car} />
                    </div>
                </div>
                <div className={`${!this.state.loading && (!this.state.car.user || this.state.car.user.username !== this.props.username) && Object.keys(this.state.car).length > 0 ? 'user-car-unauthorized' : 'user-car-hidden'}`}>
                    <div className="user-car-unauthorized-title">401</div>
                    <div>You're not a creator of <code>{this.state.car.model}</code></div>
                    <Link to="/cars">Go back</Link>
                </div>
                <div className={`${!this.state.loading && Object.keys(this.state.car).length === 0 ? 'user-car-unauthorized' : 'user-car-hidden'}`}>
                    <div className="user-car-unauthorized-title">404</div>
                    <div>Car with id <code>{this.props.match.params.id}</code> was not found:</div>
                    <Link to="/cars">Go back</Link>
                </div>
                <div className={`${this.state.loading ? 'user-car-loading' : 'user-car-hidden'}`}></div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return store.user
}

export default connect(
    mapStateToProps,
    { showSnackbar }
)(UserCar)

