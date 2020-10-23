import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './home.sass'

// Components
import { CarCard } from '../../components/car-card'
import { Navbar } from '../../components/navbar'
import Input from '../../components/basic/input'
import Select from '../../components/basic/select'

// Actions
import { showSnackbar } from '../../actions/snackbar'

// Icons
import { MdBatteryCharging60 } from 'react-icons/md'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleBrandChange = this.handleBrandChange.bind(this)

    this.state = {
      cars: [],
      allCars: [],
      categories: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    await axios.get('/cars').then(res =>
      this.setState({ cars: res.data, allCars: res.data })
    ).catch(err => {
      this.props.showSnackbar(err, 'error')
    })

    await axios.get('/categories').then(res => {
      this.setState({ categories: [{ id: 'none', value: 'id', name: 'All categories' }, ...res.data] })
    }).catch(err => {
      this.props.showSnackbar(err, 'error')
    })

    await axios.get('/brands').then(res => {
      this.setState({ brands: [{ id: 'none', value: 'id', name: 'All brands' }, ...res.data] })
    }).catch(err => {
      this.props.showSnackbar(err, 'error')
    })

    this.setState({ loading: false })
  }

  handleSearchChange(e) {
    if (e.value.length == 0) return this.setState({ cars: this.state.allCars })
    const foundCars = []
    for (let x in this.state.allCars) {
      if (this.state.allCars[x].model.includes(e.value)) foundCars.push(this.state.allCars[x])
    }
    this.setState({ cars: foundCars })
  }

  handleCategoryChange(e) {
    if (e.value === 'All categories') return this.setState({ cars: this.state.allCars })
    const foundCars = this.state.allCars.filter(c => c.category.name === e.value)
    this.setState({ cars: foundCars })
  }

  handleBrandChange(e) {
    if (e.value === 'All brands') return this.setState({ cars: this.state.allCars })
    const foundCars = this.state.allCars.filter(c => c.brand.name === e.value)
    this.setState({ cars: foundCars })
  }

  render() {
    return (
      <div className='landing'>
        <Navbar />
        <div className="cars-header">
          <div className="cars-searchbar">
            <Input placeholder="Search cars" noError={true} onChange={this.handleSearchChange} />
          </div>
          <div className="cars-filters">
            <div className="cars-filter">
              <Select name='category' value="name" onChange={this.handleCategoryChange} options={this.state.categories} />
            </div>
            <div className="cars-filter">
              <Select name="brand" value="name" onChange={this.handleBrandChange} options={this.state.brands} />
            </div>
          </div>
        </div>
        <div className={this.state.cars.length > 0 ? 'cars' : 'cars-hidden'}>
          {this.state.cars.map((car) => {
            return <CarCard car={car} key={car.id} className='cars-car' />
          })}
        </div>
        <div className={this.state.cars.length > 0 ? 'cars-hidden' : 'cars-not-found'}>
          No cars found <MdBatteryCharging60 className="not-found-icon" />
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { showSnackbar }
)(Home)

