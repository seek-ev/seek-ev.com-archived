import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TestInput } from '../forms'

const Banana = ({ submit, setSubmit, create, loading }) => {
    const [banana, setBanana] = useState({})
    const [errors, setError] = useState({})

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing
        if (!banana.trunk) valid.trunk = 'Field required'
        if (!banana.frunk) valid.frunk = 'Field required'
        if (!banana.seatsFolded) valid.seatsFolded = 'Field required'

        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        create(banana)
    }, [submit, banana, create, errors, setError, setSubmit])


    const validate = async (name, value) => {
        if (value < 0) return setError({ ...errors, [name]: 'It has to be a positive number' })
        else {
            const errClone = { ...errors }
            delete errClone[name]
            return setError(errClone)
        }
    }

    const setProperty = (e) => {
        validate(e.name, e.value)
        setBanana({ ...banana, [e.name]: parseInt(e.value) })
    }

    return (
        <Wrapper>
            <TestInput title="Trunk" name="trunk" placeholder="Trunk" value={banana.trunk || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.trunk} disabled={loading} />
            <TestInput title="Frunk" name="frunk" placeholder="Frunk" value={banana.frunk || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.frunk} disabled={loading} />
            <TestInput title="Seats folded" name="seatsFolded" placeholder="Seats folded" value={banana.seatsFolded || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.seatsFolded} disabled={loading} />
        </Wrapper>
    )
}

export { Banana }