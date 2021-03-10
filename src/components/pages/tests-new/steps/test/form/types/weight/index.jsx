import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TestInput } from '../forms'

const Weight = ({ submit, setSubmit, create, loading }) => {
    const [weight, setWeight] = useState({})
    const [errors, setError] = useState({})

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing
        if (!weight.rear) valid.rear = 'Field required'
        if (!weight.front) valid.front = 'Field required'
        if (!weight.total) valid.total = 'Field required'
        if (!weight.distribution) valid.distribution = 'Field required'

        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        create(weight)
    }, [submit, weight, create, errors, setError, setSubmit])

    const validate = async (name, type, value) => {
        if (type === 'text') {
            const splitted = value.split('/')
            if (splitted[0].length >= 3 && splitted.length === 1) return setError({ ...errors, [name]: 'Wrongly formatted' })
            else if (splitted[1] && splitted[1].length >= 3) return setError({ ...errors, [name]: 'Wrongly formatted' })
        }

        if (value < 0) return setError({ ...errors, [name]: 'It has to be a positive number' })
        else {
            const errClone = { ...errors }
            delete errClone[name]
            return setError(errClone)
        }
    }

    const setProperty = (e) => {
        validate(e.name, e.type, e.value)
        setWeight({ ...weight, [e.name]: e.type === 'number' ? parseInt(e.value) : e.value })
    }

    return (
        <Wrapper>
            <TestInput title="Rear" name="rear" placeholder="Rear" value={weight.rear || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.rear} disabled={loading} />
            <TestInput title="Front" name="front" placeholder="Front" value={weight.front || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.front} disabled={loading} />
            <TestInput title="Total" name="total" placeholder="Total" value={weight.total || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.total} disabled={loading} />
            <TestInput title="Distribution" name="distribution" placeholder="Distribution (ex. 40/60)" value={weight.distribution || ''} onChange={setProperty} type="string" min="0" maxlength="5" error={errors.distribution} disabled={loading} />
        </Wrapper>
    )
}

export { Weight }