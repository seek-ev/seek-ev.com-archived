import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'

// Styles
import { Wrapper } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { HomeWrapper } from 'components/pages/home'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Home = () => {
  const [stateFilters, setFilters] = useState([{ text: 'all', type: 'model' }, { text: 'all', type: 'category' }, { text: 'all', type: 'brand' }])
  const [brands, setBrands] = useState([{ id: 'none', value: 'id', name: 'All brands', shortName: 'All brands' }])
  const [categories, setCategories] = useState([{ id: 'none', value: 'id', name: 'All categories' }])
  const [loading, setLoading] = useState(true)
  const [position, setPosition] = useState(0)
  const [allCars, setAllCars] = useState([])
  const [cars, setCars] = useState([])
  const [page, setPage] = useState(1)
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
    if (e === 'All categories') item.text = 'all'
    else item.text = e
    items[1] = item
    await setFilters(items)
    await filter()
  }

  const handleBrandChange = async (e) => {
    let items = stateFilters
    let item = items[2]
    if (e === 'All brands') item.text = 'all'
    else item.text = e
    items[2] = item
    await setFilters(items)
    await filter()
  }

  useEffect(() => {
    const fetch = async () => {
      if (cars.length % 20 !== 0) return
      let resCars = []
      setLoading(true)
      await axios.get(`/cars?page=${page + 1}`).then(res => {
        resCars = [...cars, ...res.data]
        setPage(page + 1)
      }).catch(err => dispatch(showSnackbar(err, 'error')))

      setLoading(false)
      setCars(resCars)
      setAllCars(resCars)
    }

    const onScroll = () => {
      if (loading) return
      if (document.documentElement.offsetHeight === position) return
      if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)) {
        fetch()
        setPosition(document.documentElement.offsetHeight)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [setPage, page, cars, position, loading, dispatch])

  useEffect(() => {
    const fetchData = async () => {
      let resCars = []
      setLoading(true)

      await axios.get('/cars?page=1').then(res => {
        resCars = res.data
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

      setLoading(false)
      setCars(resCars)
      setAllCars(resCars)
    }

    fetchData()
  }, [dispatch])

  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>

        <meta property="og:title" content="Seek EV" />
        <meta property="og:description" content="Join us on the way to the future" />
        <meta property="og:image" content="https://seekev.s3.eu-central-1.amazonaws.com/assets/se_dark.png" />
      </Helmet>

      <Navbar />

      <HomeWrapper
        cars={cars}
        brands={brands}
        categories={categories}
        loading={loading}
        handleSearchChange={handleSearchChange}
        handleCategoryChange={handleCategoryChange}
        handleBrandChange={handleBrandChange}
      />
    </Wrapper>
  )
}

export { Home }