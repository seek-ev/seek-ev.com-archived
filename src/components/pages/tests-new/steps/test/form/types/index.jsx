import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import axios from 'axios'

// Styles
import { TypesWrapper } from './forms'

// Tests forms
import { Noise } from './noise'
import { Range } from './range'
import { Weight } from './weight'
import { Banana } from './banana'
import { Acceleration } from './acceleration'


// Actions
import { showSnackbar } from 'actions/snackbar'

const Types = ({ type, submit, setSubmit, loading, setLoading, car }) => {
    const [redirect, setRedirect] = useState(null)
    const dispatch = useDispatch()

    const createTest = async (childTest) => {
        setLoading(true)

        // Set test object values
        const realTest = { type, test: childTest, version: car.version.id }
        await axios.post('/tests', realTest).then(res => setRedirect('/tests')).catch(err => {
            dispatch(showSnackbar(err, 'error'))
            setLoading(false)
        })
    }

    // Test types
    const TYPES = {
        noise: <Noise submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />,
        range: <Range submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />,
        weight: <Weight submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />,
        bananaBox: <Banana submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />,
        acceleration: <Acceleration submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />
    }

    if (redirect) return <Redirect to={redirect} />

    return (
        <TypesWrapper>
            {TYPES[type]}
        </TypesWrapper>
    )
}

export { Types }