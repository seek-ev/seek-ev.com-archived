import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Styles
import './cars.sass'

// Components
import { Cars } from '../../components/cars'
import { Navbar } from '../../components/navbar'
import { Button } from '../../components/basic/button'

// Actions
import { showSnackbar } from '../../actions/snackbar'

class UserCars extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            cars: []
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        await axios.get('/users/@me/cars').then(res => {
            this.setState({ cars: res.data })
        }).catch(err => this.props.showSnackbar(err, 'error'))
        this.setState({ loading: false })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="container">
                <Navbar />
                <div className={`${!this.state.loading ? 'cars-content' : 'cars-hidden'}`}>
                    <div className="user-cars-header">
                        <div className="cars-title">Your cars</div>
                        <div className="cars-add">
                            <Button text="Add new" onClick={() => this.setState({ redirect: '/cars/new' })} />
                        </div>
                    </div>
                    <Cars cars={this.state.cars} />
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
