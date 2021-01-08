import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Styles
import { Container, Wrapper, UserCars, Header, Title, NewButton, Owned, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { Cars } from 'components/pages/cars'
import { Button } from 'components/basic/button'
import { OwnedCars } from 'components/pages/cars/owned'

// Actions
import { showSnackbar } from 'actions/snackbar'

const CarsPage = () => {
    const [redirect, setRedirect] = useState(null)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [owned, setOwned] = useState([])
    const [cars, setCars] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await setLoading(true)

            await axios.get('/users/@me/cars/owned').then(res => {
                setOwned(res.data)
            }).catch(err => dispatch(showSnackbar(err, 'error')))

            await axios.get('/users/@me/cars').then(res => {
                setCars(res.data)
            }).catch(err => dispatch(showSnackbar(err, 'error')))

            await setLoading(false)
        }

        fetchData()
    }, [dispatch])


    const fetchOwned = async () => {
        await axios.get('/users/@me/cars/owned').then(res => {
            setOwned(res.data)
        }).catch(err => dispatch(showSnackbar(err, 'error')))
    }

    const removeOwned = async (id) => {
        const found = owned.findIndex((o) => o.id === id)
        if (found === -1) return
        const arr = [...owned]
        arr.splice(found, 1)
        await setOwned(arr)
    }

    const addOwned = async (car) => {
        if (!car) return
        await fetchOwned()
    }

    const close = async () => {
        await setShow(false)
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return (
        <Container>
            <Helmet>
                <title>Your cars</title>
            </Helmet>

            <Navbar />

            {loading ? <Loading></Loading> :
                <Wrapper>
                    <UserCars>
                        <Header>
                            <Title>Added by you</Title>
                        </Header>
                        <Cars cars={cars} />
                        <NewButton>
                            <Button primary text="new" onClick={() => setRedirect('/cars/new')} />
                        </NewButton>
                    </UserCars>
                    <Owned>
                        <Header>
                            <Title>Owned by you</Title>
                        </Header>
                        <OwnedCars owned={owned} removeVersion={removeOwned} show={show} close={close} add={addOwned} />
                        <NewButton>
                            <Button primary text="add" onClick={() => setShow(true)} />
                        </NewButton>
                    </Owned>
                </Wrapper>}
        </Container>
    )
}

export { CarsPage }
