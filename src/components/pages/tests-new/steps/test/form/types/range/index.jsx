import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TestInput } from '../forms'

const Range = ({ submit, setSubmit, create, loading }) => {
    const [range, setRange] = useState({ velocity: {} })
    const [errors, setError] = useState({})

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing
        if (!range.season) valid.season = 'Field required'
        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        //create(range)
    }, [submit, range, create, errors, setError, setSubmit])

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
        setRange({ ...range, [e.name]: e.type === 'number' ? parseInt(e.value) : e.value })
    }

    return (
        <Wrapper>
            <TestInput title="Season" name="season" placeholder="Season" value={range.season || ''} onChange={setProperty} type="text" error={errors.season} disabled={loading} />
            <TestInput title="Surface" name="surface" placeholder="Surface" value={range.surface || ''} onChange={setProperty} type="text" error={errors.surface} disabled={loading} />
            <TestInput title="Temperature" name="temperature" placeholder="Temperature" value={range.temperature || ''} onChange={setProperty} type="numer" step="1" min="-50" error={errors.temperature} disabled={loading} />
            <TestInput title="Tires" name="tires" placeholder="Tires" value={range.tires || ''} onChange={setProperty} type="text" error={errors.tires} disabled={loading} />
            <TestInput title="Wheel front" name="wheelFront" placeholder="Wheel front" value={range.wheelFront || ''} onChange={setProperty} type="text" error={errors.wheelFront} disabled={loading} />
            <TestInput title="Wheel rear" name="wheelRear" placeholder="Wheel rear" value={range.wheelRear || ''} onChange={setProperty} type="text" error={errors.wheelRear} disabled={loading} />
            <TestInput title="Average speed" name="averageSpeed" placeholder="Average speed" value={range.averageSpeed || ''} onChange={setProperty} type="number" step="1" min="0" max="300" error={errors.averageSpeed} disabled={loading} />
            <TestInput title="wh per km" name="whPerKm" placeholder="Wh per km" value={range.whPerKm || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.whPerKm} disabled={loading} />
            <TestInput title="Battery capacity" name="batteryCapacity" placeholder="Battery capacity" value={range.batteryCapacity || ''} onChange={setProperty} type="number" step="any" min="0" max="1000" error={errors.batteryCapacity} disabled={loading} />
            <TestInput title="Kilometers" name="km" placeholder="Kilometers" value={range.km || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.km} disabled={loading} />
            <TestInput title="Miles" name="mi" placeholder="Miles" value={range.mi || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.mi} disabled={loading} />
            <TestInput title="Range with 75%" name="rangeWith75Percent" placeholder="Range with 75%" value={range.rangeWith75Percent || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.rangeWith75Percent} disabled={loading} />
        </Wrapper>
    )
}

export { Range }