import React, { useState } from 'react'

// Styles
import { Wrapper, Title, Buttons, LoadingWrapper, Loading } from './styles'

// Components
import { Select } from 'components/basic/select'
import { Button } from 'components/basic/button'

// Types
import { Types } from './types'


// Test options
const options = [{ value: 'weight', name: 'Weight' }, { value: 'bananaBox', name: 'Banana box' }]

const TestForm = ({ previousStep, car }) => {
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [type, setType] = useState('weight')

    const onTypeChange = (e) => {
        setType(e.value)
        setSubmit(false)
    }

    return (
        <Wrapper>
            <Title>Choose test type</Title>
            <Select options={options} onChange={onTypeChange} disabled={loading} />

            <Types submit={submit} setSubmit={setSubmit} type={type} car={car} loading={loading} setLoading={setLoading} />

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