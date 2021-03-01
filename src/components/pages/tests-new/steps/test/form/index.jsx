import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Styles
import { Wrapper, Title, Buttons, LoadingWrapper, Loading } from './styles'

// Components
import { Select } from 'components/basic/select'
import { Button } from 'components/basic/button'

// Tests forms
import { Weight } from './weight'
import { Banana } from './banana'

// Actions
import { showSnackbar } from 'actions/snackbar'

const TestForm = ({ previousStep, car }) => {
    const [redirect, setRedirect] = useState(null)
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [type, setType] = useState('weight')
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
        weight: <Weight submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />,
        bananaBox: <Banana submit={submit} setSubmit={setSubmit} create={createTest} loading={loading} />
    }

    // Test options
    const options = [{ value: 'weight', name: 'Weight' }, { value: 'bananaBox', name: 'Banana box' }]

    const chooseType = (e) => {
        setType(e.value)
        setSubmit(false)
    }

    if (redirect) return <Redirect to={redirect} />

    return (
        <Wrapper>
            <Title>Choose test type</Title>
            <Select options={options} onChange={chooseType} disabled={loading} />

            {TYPES[type]}

            <Buttons>
                <Button text="Back" onClick={() => previousStep(1)} disabled={loading} blue />
                <Button text="Create" onClick={() => setSubmit(true)} disabled={submit || loading} primary />
            </Buttons>

            {loading ? <LoadingWrapper>
                <Loading />
            </LoadingWrapper> : ''}
        </Wrapper>
    )
}

export { TestForm }