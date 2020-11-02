import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './home.sass'

// Components
import { CarCard } from '../../components/car-card'
import { Navbar } from '../../components/navbar'
import { Input } from '../../components/basic/input'
import { Select } from '../../components/basic/select'

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
    this.filter = this.filter.bind(this)

    this.state = {
      cars: [],
      allCars: [],
      brands: [
        { id: 'none', value: 'id', name: 'All brands' }
      ],
      categories: [
        { id: 'none', value: 'id', name: 'All categories' }
      ],
      filters: [
        { text: 'all', type: 'model' },
        { text: 'all', type: 'category' },
        { text: 'all', type: 'brand' }
      ],
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

  async filter() {
    const filters = this.state.filters
    let currentCars = this.state.cars
    let filteredCars = this.state.allCars

    for (let f in filters) {
      let current = currentCars
      if (filters[f].text === 'all') {
        current = this.state.allCars
      } else {
        current = this.state.allCars.filter(c => {
          if (filters[f].type === 'model') return c[filters[f].type].toLowerCase().includes(filters[f].text.toLowerCase())
          else return c[filters[f].type].name === filters[f].text
        })
      }

      filteredCars = filteredCars.filter(val => current.includes(val))
    }

    if (filters.every(f => f.text === 'all')) filteredCars = this.state.allCars

    await this.setState({
      cars: filteredCars
    })
  }

  async handleSearchChange(e) {
    let items = [...this.state.filters]
    let item = items[0]
    if (e.value.length === 0) item.text = 'all'
    else item.text = e.value
    items[0] = item
    await this.setState({ filters: items })
    await this.filter()
  }

  async handleCategoryChange(e) {
    let items = [...this.state.filters]
    let item = items[1]
    if (e.value === 'All categories') item.text = 'all'
    else item.text = e.value
    items[1] = item
    await this.setState({ filters: items })
    await this.filter()
  }

  async handleBrandChange(e) {
    let items = [...this.state.filters]
    let item = items[2]
    if (e.value === 'All brands') item.text = 'all'
    else item.text = e.value
    items[2] = item
    await this.setState({ filters: items })
    await this.filter()
  }

  render() {
    return (
      <div className='landing'>
        <Navbar />
        <div className="cars-header">
          <div className="cars-searchbar">
            <div className="cars-filter-title">Browse cars</div>
            <Input placeholder="Search cars" disabled={this.state.loading} noError={true} onChange={this.handleSearchChange} />
          </div>
          <div className="cars-filters">
            <div className="cars-filter">
              <div className="cars-filter-title">Category</div>
              <Select name='category' value="name" disabled={this.state.loading} onChange={this.handleCategoryChange} options={this.state.categories} />
            </div>
            <div className="cars-filter">
              <div className="cars-filter-title">Brands</div>
              <Select name="brand" value="name" disabled={this.state.loading} onChange={this.handleBrandChange} options={this.state.brands} />
            </div>
          </div>
        </div>

        <div className={(this.state.cars.length > 0) && !this.state.loading ? 'cars' : 'cars-hidden'}>
          {this.state.cars.map((car) => {
            return <CarCard car={car} key={car.id} className='cars-car' />
          })}
        </div>
        <div className={(this.state.cars.length > 0 || this.state.loading) ? 'cars-hidden' : 'cars-not-found'}>
          No cars found <MdBatteryCharging60 className="not-found-icon" />
        </div>

        <div className={this.state.loading ? 'cars-loading' : 'cars-hidden'}>Loading...</div>
      </div>
    )
  }
}

export default connect(
  null,
  { showSnackbar }
)(Home)

