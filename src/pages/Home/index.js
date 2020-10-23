import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './home.sass'

// Components
import { CarCard } from '../../components/car-card'
import { Navbar } from '../../components/navbar'

// Actions
import { showSnackbar } from '../../actions/snackbar'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [],
      loading: false
    }
  }

  async componentDidMount() {
    await axios.get('/cars').then(res =>
      this.setState({ cars: res.data })
    ).catch(err => {
      this.props.showSnackbar(err, 'error')
    })
  }

  render() {
    return (
      <div className='landing'>
        <Navbar />
        <div className="cars-header">
          <div className="cars-searchbar">
            Searchbar
          </div>
          <div className="cars-filters">
            <div className="cars-filter">Category</div>
            <div className="cars-filter">Brand</div>
          </div>
        </div>
        <div className="cars">
          {this.state.cars.map((car) => {
            return <CarCard car={car} key={car.id} className='cars-car' />
          })}
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { showSnackbar }
)(Home)

