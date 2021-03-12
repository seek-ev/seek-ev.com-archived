import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TInput } from '../types'

const Banana = ({ test, editing, submit, setSubmit, patch, loading }) => {
    const [bananaCopy, setCopy] = useState({})
    const [banana, setBanana] = useState({})
    const [errors, setError] = useState({})

    // Set test data
    useEffect(() => {
        setBanana({ ...test })
        setCopy({ ...test })
    }, [test])

    // If user cancels editing set previous test data
    useEffect(() => {
        if (editing === false) setBanana({ ...bananaCopy })
    }, [editing, bananaCopy])

    // Submit
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
        patch(banana)
    }, [submit, banana, patch, errors, setError, setSubmit])

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
            <TInput title="Trunk" name="trunk" placeholder="Trunk" value={banana.trunk || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.trunk} disabled={loading || !editing} />
            <TInput title="Frunk" name="frunk" placeholder="Frunk" value={banana.frunk || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.frunk} disabled={loading || !editing} />
            <TInput title="Seats folded" name="seatsFolded" placeholder="Seats folded" value={banana.seatsFolded || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.seatsFolded} disabled={loading || !editing} />
        </Wrapper >
    )
}

export { Banana }