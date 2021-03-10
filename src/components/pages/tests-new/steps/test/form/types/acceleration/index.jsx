import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TestInput } from '../forms'

const Acceleration = ({ submit, setSubmit, create, loading }) => {
    const [acceleration, setAcceleration] = useState({ velocity: {} })
    const [errors, setError] = useState({})

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing
        if (!acceleration.season) valid.season = 'Field required'
        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        //create(acceleration)
    }, [submit, acceleration, create, errors, setError, setSubmit])

    const validate = async (name, type, value) => {
        if (type === 'text') return
        if (value < 0) return setError({ ...errors, [name]: 'It has to be a positive number' })
        else {
            const errClone = { ...errors }
            delete errClone[name]
            return setError(errClone)
        }
    }

    const setProperty = (e) => {
        validate(e.name, e.type, e.value)
        setAcceleration({ ...acceleration, [e.name]: e.type === 'number' ? parseInt(e.value) : e.value })
    }

    return (
        <Wrapper>
            <TestInput name="tires" placeholder="Tires" value={acceleration.tires || ''} onChange={setProperty} type="text" error={errors.tires} disabled={loading} />
            <TestInput name="wheelFront" placeholder="Wheel front" value={acceleration.wheelFront || ''} onChange={setProperty} type="text" error={errors.wheelFront} disabled={loading} />
            <TestInput name="wheelRear" placeholder="Wheel rear" value={acceleration.wheelRear || ''} onChange={setProperty} type="text" error={errors.wheelRear} disabled={loading} />
            <TestInput name="specTime" placeholder="Spec time" value={acceleration.specTime || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.specTime} disabled={loading} />
            <TestInput name="test_vs_spec" placeholder="Test vs Spec" value={acceleration.test_vs_spec || ''} onChange={setProperty} type="number" step="1" min="-50" error={errors.test_vs_spec} disabled={loading} />
        </Wrapper>
    )
}

export { Acceleration }