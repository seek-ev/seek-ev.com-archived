import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Styles
import './car.sass'

// Components
import { Navbar } from '../../components/navbar'
import { CarInfo } from '../../components/car/car-info'
import { CarMenu } from '../../components/car/car-menu'
import { CarPatch } from '../../components/car/car-patch'
import { CarVersions } from '../../components/car/car-versions'
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
        this.setState({ currentCar: this.props.match.params.model })

        await axios.get(`/cars/model/${this.props.match.params.model}`).then(res => this.setState({ car: res.data }))
            .catch(err => this.props.showSnackbar(err, 'error'))

        if (this.state.car) document.title = `${this.state.car.brand ? this.state.car.brand.shortName : ''} ${this.state.car.model ? this.state.car.model : this.props.match.params.model}`

        this._ismounted = true

        this.setState({ loading: false })
    }

    async componentDidUpdate() {
        if ((this._ismounted && !this.state.loading) && (this.props.match.params.model.toLowerCase() !== this.state.currentCar.toLowerCase())) {
            this.setState({ loading: true, currentCar: this.props.match.params.model })

            await axios.get(`/cars/model/${this.props.match.params.model}`).then(res => this.setState({ car: res.data }))
                .catch(err => this.props.showSnackbar(err, 'error'))

            if (this.state.car) document.title = `${this.state.car.brand ? this.state.car.brand.shortName : ''} ${this.state.car.model ? this.state.car.model : this.props.match.params.model}`

            this.setState({ loading: false })
        }
    }

    componentWillUnmount() {
        document.title = 'Seek EV'
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className={Object.keys(this.state.car).length > 0 && !this.state.loading ? 'car-landing' : 'car-hidden'}>
                    <div className="car-header">
                        <div className="car-header-info">
                            <CarPictures pictures={this.state.car.pictures} />
                            <CarInfo model={this.state.car.model} concept={this.state.car.concept} productionYears={this.state.car.productionYears} category={this.state.car.category} brand={this.state.car.brand} createdBy={this.state.car.admin ? this.state.car.admin : this.state.car.user} />
                        </div>
                        <CarMenu versions={this.state.car.versions} />
                    </div>
                    <div className="car-details">
                        <CarVersions versions={this.state.car.versions} />
                    </div>
                    <CarPatch carId={this.state.car.id} />
                </div>

                <div className={Object.keys(this.state.car).length === 0 && !this.state.loading ? 'car-not-found' : 'car-hidden'}>
                    <div className="car-not-found-title">404</div>
                    <div>We couldn't find <code>{this.props.history.location.pathname.replace('/', '')}</code></div>
                    <div className="car-not-found-link">Come back to <Link to="/">Home page</Link></div>
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