import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TInput } from '../types'

const Noise = ({ test, editing, submit, setSubmit, patch, loading }) => {
    const [velocityCopy, setVelCopy] = useState({})
    const [velocity, setVelocity] = useState({})
    const [noiseCopy, setCopy] = useState({})
    const [errors, setError] = useState({})
    const [noise, setNoise] = useState({})

    // Set test data
    useEffect(() => {
        setNoise({ ...test })
        setCopy({ ...test })
        setVelocity({ ...test['velocity'] })
        setVelCopy({ ...test['velocity'] })
    }, [test])

    // If user cancels editing set previous test data
    useEffect(() => {
        if (editing === false) {
            setNoise({ ...noiseCopy })
            setVelocity({ ...velocityCopy })
        }
    }, [editing, noiseCopy, velocityCopy])


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
        patch(noise)
    }, [submit, noise, velocity, patch, errors, setError, setSubmit])

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
            <TInput title="Season" name="season" placeholder="Season" value={noise.season || ''} onChange={setProperty} type="text" error={errors.season} disabled={loading || !editing} />
            <TInput title="Surface" name="surface" placeholder="Surface" value={noise.surface || ''} onChange={setProperty} type="text" error={errors.surface} disabled={loading || !editing} />
            <TInput title="Tires" name="tires" placeholder="Tires" value={noise.tires || ''} onChange={setProperty} type="text" error={errors.tires} disabled={loading || !editing} />
            <TInput title="Wheel front" name="wheelFront" placeholder="Wheel front" value={noise.wheelFront || ''} onChange={setProperty} type="text" error={errors.wheelFront} disabled={loading || !editing} />
            <TInput title="Wheel rear" name="wheelRear" placeholder="Wheel rear" value={noise.wheelRear || ''} onChange={setProperty} type="text" error={errors.wheelRear} disabled={loading || !editing} />
            <TInput title="80 kmph" name="_80" placeholder="80 kmph" value={velocity._80 || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._80} disabled={loading || !editing} />
            <TInput title="100 kmph" name="_100" placeholder="100 kmph" value={velocity._100 || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._100} disabled={loading || !editing} />
            <TInput title="120 kmph" name="_120" placeholder="120 kmph" value={velocity._120 || ''} onChange={setVelocityProperty} type="number" step="1" min="0" error={errors._120} disabled={loading || !editing} />
            <TInput id="aftermarket" title="Aftermarked soundproofing" name="aftermarketSoundproofing" placeholder="Aftermarket soundproofing" value={noise.aftermarketSoundproofing || true} checked={noise.aftermarketSoundproofing} onChange={setProperty} type="checkbox" error={errors.aftermarketSoundproofing} disabled={loading || !editing} />
        </Wrapper>
    )
}

export { Noise }