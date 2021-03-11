import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TestInput } from '../forms'

const Noise = ({ submit, setSubmit, create, loading }) => {
    const [noise, setNoise] = useState({})
    const [velocity, setVelocity] = useState({})
    const [errors, setError] = useState({})

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing in velocity
        if (!velocity._80) valid._80 = 'Field required'

        // Check if any value is missing in noise
        if (!noise.season) valid.season = 'Field required'
        if (!noise.surface) valid.surface = 'Field required'
        if (!noise.tires) valid.tires = 'Field required'
        if (noise.aftermarketSoundproofing === undefined) setNoise({ ...noise, afterMarketSoundproofing: false })

        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        create(noise)
    }, [submit, noise, velocity, create, errors, setError, setSubmit])

    const validate = async (name, type, value) => {
        if (type !== 'number' || value >= 0) {
            const errClone = { ...errors }
            delete errClone[name]
            return setError(errClone)
        }
        else return setError({ ...errors, [name]: 'It has to be a positive number' })
    }

    const setProperty = (e) => {
        validate(e.name, e.type, e.value)
        if (e.type === 'checkbox') return setNoise({ ...noise, [e.name]: e.checked })
        setNoise({ ...noise, [e.name]: e.value })
    }

    const setVelocityProperty = (e) => {
        validate(e.name, e.type, e.value)
        setVelocity({ ...velocity, [e.name]: parseInt(e.value) })
        return setNoise({ ...noise, velocity: { ...velocity, [e.name]: parseInt(e.value) } })
    }

    return (
        <Wrapper>
            <TestInput title="Season" name="season" placeholder="Season" value={noise.season || ''} onChange={setProperty} type="text" error={errors.season} disabled={loading} />
            <TestInput title="Surface" name="surface" placeholder="Surface" value={noise.surface || ''} onChange={setProperty} type="text" error={errors.surface} disabled={loading} />
            <TestInput title="Tires" name="tires" placeholder="Tires" value={noise.tires || ''} onChange={setProperty} type="text" error={errors.tires} disabled={loading} />
            <TestInput title="Wheel front" name="wheelFront" placeholder="Wheel front" value={noise.wheelFront || ''} onChange={setProperty} type="text" error={errors.wheelFront} disabled={loading} />
            <TestInput title="Wheel rear" name="wheelRear" placeholder="Wheel rear" value={noise.wheelRear || ''} onChange={setProperty} type="text" error={errors.wheelRear} disabled={loading} />
            <TestInput title="80 kmph" name="_80" placeholder="80 kmph" value={velocity._80 || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._80} disabled={loading} />
            <TestInput title="100 kmph" name="_100" placeholder="100 kmph" value={velocity._100 || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._100} disabled={loading} />
            <TestInput title="120 kmph" name="_120" placeholder="120 kmph" value={velocity._120 || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._120} disabled={loading} />
            <TestInput title="Aftermarked soundproofing" name="aftermarketSoundproofing" placeholder="Aftermarket soundproofing" value={noise.aftermarketSoundproofing || ''} onChange={setProperty} type="checkbox" error={errors.aftermarketSoundproofing} disabled={loading} />
        </Wrapper>
    )
}

export { Noise }