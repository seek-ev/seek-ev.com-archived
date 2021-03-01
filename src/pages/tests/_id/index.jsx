import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'

// Styles
import { Wrapper, NotFound, NotFoundLink, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { Test } from 'components/pages/test'

// Actions
import { showSnackbar } from 'actions/snackbar'

const TestPage = () => {
    const [loading, setLoading] = useState(true)
    const [test, setTest] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        const fetch = async () => {
            await setLoading(true)
            await axios.get(`/users/@me/tests/${params.id}`).then(res => setTest(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        if (params.id) fetch()
    }, [params, dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>Test</title>
            </Helmet>

            <Navbar />

            {!loading && test ? <Test test={test} /> :
                loading ? <Loading /> :
                    <NotFound>
                        Test not found
                    <NotFoundLink to="/tests">Back</NotFoundLink>
                    </NotFound>
            }


        </Wrapper>
    )
}

export { TestPage }