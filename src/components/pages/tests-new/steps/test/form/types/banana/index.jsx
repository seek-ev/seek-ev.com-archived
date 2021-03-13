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


    const validate = async (name, type, value, min, max) => {
        if (type === 'number') {
            if (value > max) return setError({ ...errors, [name]: `Maximum number is ${max}` })
            else if (value < min) return setError({ ...errors, [name]: `Minimum number is ${min}` })
        }

        const errClone = { ...errors }
        delete errClone[name]
        return setError(errClone)
    }

    const setProperty = (e) => {
        validate(e.name, e.type, e.value, parseInt(e.min), parseInt(e.max))
        setBanana({ ...banana, [e.name]: parseInt(e.value) })
    }

    return (
        <Wrapper margin>
            <TestInput title="Trunk" name="trunk" placeholder="Trunk" value={banana.trunk || ''} onChange={setProperty} type="number" step="1" min="0" max="10000" error={errors.trunk} disabled={loading} />
            <TestInput title="Frunk" name="frunk" placeholder="Frunk" value={banana.frunk || ''} onChange={setProperty} type="number" step="1" min="0" max="10000" error={errors.frunk} disabled={loading} />
            <TestInput title="Seats folded" name="seatsFolded" placeholder="Seats folded" value={banana.seatsFolded || ''} onChange={setProperty} type="number" step="1" min="0" max="10000" error={errors.seatsFolded} disabled={loading} />
        </Wrapper>
    )
}

export { Banana }