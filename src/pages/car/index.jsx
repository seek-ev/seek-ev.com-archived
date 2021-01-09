import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper, Car, CarNotFound, CarNotFoundLink, CarNotFoundButton, CarNotFoundTitle, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { CarContainer } from 'components/pages/car'


// Actions
import { showSnackbar } from 'actions/snackbar'

const CarPage = () => {
    const [loading, setLoading] = useState(true)
    const [car, setCar] = useState({})
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

        fetchCar()

    }, [params, dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>{car.model ? car.model : 'Car not found'}</title>
                <meta name="description" content={car.brand ? car.brand.description : ''} />

                {car.model ? <meta property="og:title" content={car.model} /> : ''}
                {car.brand ? <meta property="og:description" content={car.brand.description} /> : ''}
                {car.pictures && car.pictures.length > 0 ? <meta property="og:image" content={car.pictures[0].url} /> : <meta property="og:image" content={'/se_dark.png'} />}
            </Helmet>

            <Navbar />

            {Object.keys(car).length > 0 && !loading ? <Car><CarContainer car={car} /></Car> : ''}

            {Object.keys(car).length === 0 && !loading ? <CarNotFound>
                <CarNotFoundTitle>404</CarNotFoundTitle>
                <div>We couldn't find <code>{location.pathname.replace('/', '')}</code></div>
                <CarNotFoundLink>Come back to <CarNotFoundButton to="/">Home page</CarNotFoundButton></CarNotFoundLink>
            </CarNotFound>
                : ''}

            {loading ? <Loading></Loading> : ''}
        </Wrapper>
    )
}

export { CarPage }
