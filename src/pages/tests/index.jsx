import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { Tests } from 'components/pages/tests'

// Actions
import { showSnackbar } from 'actions/snackbar'

const TestsPage = () => {
    const [loading, setLoading] = useState(true)
    const [tests, setTests] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            await axios.get('/users/@me/tests').then(res => setTests(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        fetch()
    }, [dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>Your tests</title>
            </Helmet>

            <Navbar />

            {!loading ? <Tests tests={tests} /> : <Loading />}
        </Wrapper>
    )
}

export { TestsPage }