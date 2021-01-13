import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { HomeWrapper } from 'components/pages/home'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Home = () => {
  const [cars, setCars] = useState([])
  const [allCars, setAllCars] = useState([])
  const [stateFilters, setFilters] = useState([{ text: 'all', type: 'model' }, { text: 'all', type: 'category' }, { text: 'all', type: 'brand' }])
  const [brands, setBrands] = useState([{ id: 'none', value: 'id', name: 'All brands', shortName: 'All brands' }])
  const [categories, setCategories] = useState([{ id: 'none', value: 'id', name: 'All categories' }])
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  const filter = async () => {
    const filters = stateFilters
    let currentCars = cars
    let filteredCars = allCars

    for (let f in filters) {
      let current = currentCars
      if (filters[f].text === 'all') {
        current = allCars
      } else {
        current = allCars.filter(c => {
          if (filters[f].type === 'model') return c[filters[f].type].toLowerCase().includes(filters[f].text.toLowerCase())
          else return c[filters[f].type].name === filters[f].text
        })
      }

      filteredCars = filteredCars.filter(val => current.includes(val))
    }

    if (filters.every(f => f.text === 'all')) filteredCars = allCars

    await setCars(filteredCars)
  }

  const handleSearchChange = async (e) => {
    let items = stateFilters
    let item = items[0]
    if (e.value.length === 0) item.text = 'all'
    else item.text = e.value
    items[0] = item
    await setFilters(items)
    await filter()
  }

  const handleCategoryChange = async (e) => {
    let items = stateFilters
    let item = items[1]
    if (e.value === 'All categories') item.text = 'all'
    else item.text = e.value
    items[1] = item
    await setFilters(items)
    await filter()
  }

  const handleBrandChange = async (e) => {
    let items = stateFilters
    let item = items[2]
    if (e.value === 'All brands') item.text = 'all'
    else item.text = e.value
    items[2] = item
    await setFilters(items)
    await filter()
  }

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      await axios.get('/cars').then(async res => {
        await setCars(res.data)
        await setAllCars(res.data)
        await setLoaded(true)
      }).catch(err => {
        dispatch(showSnackbar(err, 'error'))
      })

      await axios.get('/categories').then(res => {
        setCategories([{ id: 'none', value: 'id', name: 'All categories' }, ...res.data])
      }).catch(err => {
        dispatch(showSnackbar(err, 'error'))
      })

      await axios.get('/brands').then(res => {
        setBrands([{ id: 'none', value: 'id', name: 'All brands', shortName: 'All brands' }, ...res.data])
      }).catch(err => {
        dispatch(showSnackbar(err, 'error'))
      })


    }

    fetchData()

    setLoading(false)
  }, [dispatch])

  return (
    <Wrapper>
      <Helmet>
        <title>Seek EV</title>
        <meta name="description" content="Seek EV is a place where you can find everything about every existing electric vehicle" />

        <meta property="og:title" content="Seek EV" />
        <meta property="og:description" content="Seek EV is a place where you can find everything about every existing electric vehicle" />
        <meta property="og:image" content="https://seekev.s3.eu-central-1.amazonaws.com/assets/se_dark.png" />
      </Helmet>

      <Navbar />

      <HomeWrapper
        cars={cars}
        brands={brands}
        categories={categories}
        loading={loading}
        loaded={loaded}
        handleSearchChange={handleSearchChange}
        handleCategoryChange={handleCategoryChange}
        handleBrandChange={handleBrandChange}
      />
    </Wrapper>
  )
}

export { Home }