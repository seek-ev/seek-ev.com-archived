import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Styles
import { Wrapper, Container, Unauthorized, UnauthorizedTitle, UnauthorizedLink, NotFound, NotFoundLink, Loading, Processing, ProcessingLoading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { UserCarComponent } from 'components/pages/cars/car'

// Actions
import { showSnackbar } from 'actions/snackbar'

const UserCarPage = () => {
    const [loading, setLoading] = useState(false)
    const [processing, setProcessing] = useState(false)
    const user = useSelector(state => state.user)
    const [car, setCar] = useState({})
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        const fetchCar = async () => {
            await setLoading(true)

            await axios.get(`/cars/id/${params.id}`).then(res => {
                setCar(res.data)
            }).catch(err => dispatch(showSnackbar(err, 'error')))

            await setLoading(false)
        }

        fetchCar()
    }, [params, dispatch])

    const handleProcessing = async (e) => {
        await setProcessing(e)
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Your own {Object.keys(car).length > 0 ? car.brand.shortName + ' ' + car.model : ''}</title>
            </Helmet>

            <Navbar />

            {!loading && car.user && car.user.username === user.username ? <Container>
                <UserCarComponent car={car} onCarProcessing={handleProcessing} />
            </Container> : ''}

            {!loading && (!car.user || car.user.username !== user.username) && Object.keys(car).length > 0 ? <Unauthorized>
                <UnauthorizedTitle>401</UnauthorizedTitle>
                <div>You're not a creator of <code>{car.model}</code></div>
                <UnauthorizedLink to="/cars">Go back</UnauthorizedLink>
            </Unauthorized> : ''}

            {!loading && Object.keys(car).length === 0 ? <NotFound>
                <UnauthorizedTitle>404</UnauthorizedTitle>
                <div>Car with id <code>{params.id}</code> was not found</div>
                <NotFoundLink to="/cars">Go back</NotFoundLink>
            </NotFound> : ''}

            {loading ? <Loading></Loading> : ''}

            {processing ? <Processing><ProcessingLoading></ProcessingLoading></Processing> : ''}
        </Wrapper>
    )
}

export { UserCarPage }
