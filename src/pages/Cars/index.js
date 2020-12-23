import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Styles
import './cars.sass'

// Components
import { Cars } from 'components/pages/cars'
import { Navbar } from 'components/navbar'
import { OwnedCars } from 'components/pages/cars/owned'

// Actions
import { showSnackbar } from 'actions/snackbar'

// Icons
import { MdAddCircle } from 'react-icons/md'

class UserCars extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            show: false,
            cars: [],
            owned: []
        }

        this.close = this.close.bind(this)
        this.addOwned = this.addOwned.bind(this)
        this.fetchOwned = this.fetchOwned.bind(this)
        this.removeOwned = this.removeOwned.bind(this)
    }

    async fetchOwned() {
        await axios.get('/users/@me/cars/owned').then(res => {
            this.setState({ owned: res.data })
        }).catch(err => this.props.showSnackbar(err, 'error'))
    }

    async componentDidMount() {
        this.setState({ loading: true })

        // Get cars created by user
        await axios.get('/users/@me/cars').then(res => {
            this.setState({ cars: res.data })
        }).catch(err => this.props.showSnackbar(err, 'error'))

        // Get cars owned by user
        await this.fetchOwned()

        this.setState({ loading: false })
    }

    async removeOwned(id) {
        const found = this.state.owned.findIndex((o) => o.id === id)
        if (found === -1) return
        const arr = [...this.state.owned]
        arr.splice(found, 1)
        await this.setState({ owned: arr })
    }

    async addOwned(car) {
        if (!car) return
        await this.fetchOwned()
    }

    async close() {
        await this.setState({ show: false })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={this.state.redirect} />
        }

        return (
            <div className="container">
                <Navbar />
                <div className={`${!this.state.loading ? 'cars-content' : 'cars-hidden'}`}>
                    <div className="user-cars">
                        <div className="user-cars-header">
                            <div className="cars-title">Added by you</div>
                            <div className="cars-add">
                                <MdAddCircle onClick={() => this.setState({ redirect: '/cars/new' })} />
                            </div>
                        </div>
                        <Cars cars={this.state.cars} />
                    </div>
                    <div className="user-cars-owned">
                        <div className="user-cars-header">
                            <div className="cars-title">Owned by you</div>
                            <div className="cars-add">
                                <MdAddCircle onClick={() => this.setState({ show: true })} />
                            </div>
                        </div>
                        <OwnedCars owned={this.state.owned} removeVersion={this.removeOwned} show={this.state.show} close={this.close} add={this.addOwned} />
                    </div>
                </div>
                <div className={`${this.state.loading ? 'cars-loading' : 'cars-hidden'}`}></div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(UserCars)
