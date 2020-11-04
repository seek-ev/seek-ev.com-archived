import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './car.sass'

// Components
import { Navbar } from '../../components/navbar'
import { CarInfo } from '../../components/car/car-info'
import { CarMenu } from '../../components/car/car-menu'
import { CarDetails } from '../../components/car/car-details'
import { CarPictures } from '../../components/car/car-pictures'

// Actions
import { showSnackbar } from '../../actions/snackbar'


class Car extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            car: {},
            currentCar: '',
            loading: true
        }
    }

    async componentDidMount() {
        await axios.get(`/cars/model/${this.props.match.params.model}`).then(res => this.setState({ car: res.data, currentCar: res.data.model }))
            .catch(err => this.props.showSnackbar(err, 'error'))

        if (this.state.car) document.title = this.state.car.model

        this._ismounted = true

        this.setState({ loading: false })
    }

    async componentDidUpdate() {
        if ((this._ismounted && !this.state.loading) && (this.props.match.params.model.toLowerCase() !== this.state.currentCar.toLowerCase())) {
            this.setState({ loading: true })

            await axios.get(`/cars/model/${this.props.match.params.model}`).then(res => this.setState({ car: res.data, currentCar: res.data.model }))
                .catch(err => this.props.showSnackbar(err, 'error'))

            if (this.state.car) document.title = this.state.car.model

            this.setState({ loading: false })
        }
    }

    componentWillUnmount() {
        document.title = 'Seek EV'
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className={Object.keys(this.state.car).length > 0 && !this.state.loading ? 'car-landing' : 'car-hidden'}>
                    <div className="car-header">
                        <div className="car-header-info">
                            <CarPictures pictures={this.state.car.pictures} />
                            <CarInfo model={this.state.car.model} productionYears={this.state.car.productionYears} category={this.state.car.category} brand={this.state.car.brand} createdBy={this.state.car.admin ? this.state.car.admin : this.state.car.user} />
                        </div>
                        <CarMenu versions={this.state.car.versions} />
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