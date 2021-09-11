import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Loading } from 'components/basic/loading/styles.js'
import {
    Wrapper,
    Car,
    CarNotFound,
    CarNotFoundLink,
    CarNotFoundButton,
    CarNotFoundTitle
} from './styles'

// Components
import { Navbar } from 'components/navbar'
import { CarContainer } from 'components/pages/car'

// Actions
import { showSnackbar } from 'actions/snackbar'

// Query strings
const queryString = require('query-string')

const CarPage = () => {
    const [loading, setLoading] = useState(true)
    const [car, setCar] = useState({})
    const [timeline, setTimeline] = useState(null)
    const [version, setVersion] = useState(null)
    const dispatch = useDispatch()
    const location = useLocation()
    const params = useParams()

    useEffect(() => {
        const fetchCar = async () => {
            await setLoading(true)

            await axios.get(`/cars/model/${params.model}`).then(res => setCar(res.data))
                .catch(err => {
                    if (err.response && err.response.status === 404) return
                    dispatch(showSnackbar(err, 'error'))
                })

            await setLoading(false)
        }

        const parsed = queryString.parse(location.search)

        if (parsed.timeline) setTimeline(parsed.timeline)
        if (parsed.version) setVersion(parsed.version)

        fetchCar()

    }, [params, dispatch, location])

    return (
        <Wrapper>
            <Helmet>
                <title>{car.model ? car.model : 'Car not found'}</title>
                <meta name="description" content={car.brand ? car.brand.description : ''} />
            </Helmet>

            <Navbar />

            {Object.keys(car).length > 0 && !loading ? <Car><CarContainer car={car} timeline={timeline} version={version} /></Car> : ''}

            {Object.keys(car).length === 0 && !loading ? <CarNotFound>
                <CarNotFoundTitle>404</CarNotFoundTitle>
                <div>We couldn't find <code>{location.pathname.replace('/', '')}</code></div>
                <CarNotFoundLink>Come back to <CarNotFoundButton to="/">Home page</CarNotFoundButton></CarNotFoundLink>
            </CarNotFound>
                : ''}

            {loading ? <Loading /> : ''}
        </Wrapper>
    )
}

export { CarPage }
