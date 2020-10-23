import React from 'react'
import { connect } from 'react-redux'

// Styles
import './car.sass'

// Components
import { Navbar } from '../../components/navbar'

// Actions
import { showSnackbar } from '../../actions/snackbar'


class Car extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            car: null
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="car">
                    {this.props.match.params.model}
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Car)