import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './car.sass'

// Components
import { Navbar } from '../../components/navbar'
import { CarInfo } from '../../components/car/car-info'
import { CarDetails } from '../../components/car/car-details'
import { CarPictures } from '../../components/car/car-pictures'

// Actions
import { showSnackbar } from '../../actions/snackbar'


class Car extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            car: {},
            loading: true
        }
    }

    async componentDidMount() {
        await axios.get(`/cars/model/${this.props.location.pathname.replace('/', '')}`).then(res => this.setState({ car: res.data }))
            .catch(err => this.props.showSnackbar(err, 'error'))
        this.setState({ loading: false })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className={this.state.car && !this.state.loading ? 'car-landing' : 'car-hidden'}>
                    <div className="car-header">
                        <CarPictures pictures={this.state.car.pictures} />
                        <CarInfo model={this.state.car.model} productionYears={this.state.car.productionYears} category={this.state.car.category} brand={this.state.car.brand} createdBy={this.state.car.admin ? this.state.car.admin : this.state.car.user} />
                    </div>
                    <div className="car-details-container">
                        <CarDetails />
                    </div>
                </div>

                <div className={this.state.loading ? 'loading' : ''}>
                    <div className={this.state.loading ? 'loader' : ''}></div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Car)