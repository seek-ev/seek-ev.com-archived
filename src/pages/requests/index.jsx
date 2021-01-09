import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { Requests } from 'components/pages/requests'

// Actions
import { showSnackbar } from 'actions/snackbar'

const RequestsPage = () => {
    const [loading, setLoading] = useState(true)
    const [requests, setRequests] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchRequests = async () => {
            await setLoading(true)

            await axios.get('/users/@me/requests').then(res => {
                setRequests(res.data.sort((a, b) => { return b.id - a.id }))
            }).catch(err => dispatch(showSnackbar(err, 'error')))

            await setLoading(false)
        }

        fetchRequests()
    }, [dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>Your requests</title>
            </Helmet>

            <Navbar />

            {!loading ? <Requests requests={requests} /> : ''}

            {loading ? <Loading></Loading> : ''}
        </Wrapper>
    )
}

export { RequestsPage }