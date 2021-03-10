import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TestInput } from '../forms'

const Noise = ({ submit, setSubmit, create, loading }) => {
    const [noise, setNoise] = useState({ velocity: {} })
    const [errors, setError] = useState({})

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing
        if (!noise.season) valid.season = 'Field required'
        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        //create(noise)
    }, [submit, noise, create, errors, setError, setSubmit])

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
        setNoise({ ...noise, [e.name]: e.value })
    }

    const setVelocityProperty = (e) => {
        validate(e.name, e.type, e.value)
        return setNoise({ ...noise, velocity: { [e.name]: parseInt(e.value) } })
    }

    return (
        <Wrapper>
            <TestInput name="season" placeholder="Season" value={noise.season || ''} onChange={setProperty} type="text" error={errors.season} disabled={loading} />
            <TestInput name="surface" placeholder="Surface" value={noise.surface || ''} onChange={setProperty} type="text" error={errors.surface} disabled={loading} />
            <TestInput name="tires" placeholder="Tires" value={noise.tires || ''} onChange={setProperty} type="text" error={errors.tires} disabled={loading} />
            <TestInput name="wheelFront" placeholder="Wheel front" value={noise.wheelFront || ''} onChange={setProperty} type="text" error={errors.wheelFront} disabled={loading} />
            <TestInput name="wheelRear" placeholder="Wheel rear" value={noise.wheelRear || ''} onChange={setProperty} type="text" error={errors.wheelRear} disabled={loading} />
            <TestInput name="80" placeholder="80 kmph" value={noise.velocity['80'] || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._80} disabled={loading} />
            <TestInput name="100" placeholder="100 kmph" value={noise.velocity['100'] || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._100} disabled={loading} />
            <TestInput name="120" placeholder="120 kmph" value={noise.velocity['120'] || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._120} disabled={loading} />
            <TestInput name="aftermarketSoundproofing" placeholder="Aftermarket soundproofing" value={noise.aftermarketSoundproofing || ''} onChange={setProperty} type="checkbox" error={errors.aftermarketSoundproofing} disabled={loading} />
        </Wrapper>
    )
}

export { Noise }