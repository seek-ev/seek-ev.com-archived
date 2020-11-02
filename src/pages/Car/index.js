import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './car.sass'

// Components
import { Navbar } from '../../components/navbar'
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
        console.log(this.state.car)
        this.setState({ loading: false })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className={this.state.car && !this.state.loading ? 'car-landing' : 'car-hidden'}>
                    <div className="car-header">
                        <CarPictures pictures={this.state.car.pictures} />
                        <div className="car-info">
                            <div className="car-model">
                                {this.state.car.model}
                            </div>
                        </div>
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