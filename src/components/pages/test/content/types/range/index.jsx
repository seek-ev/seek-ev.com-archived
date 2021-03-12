import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TInput } from '../types'

const Range = ({ test, editing, submit, setSubmit, patch, loading }) => {
    const [chargingCopy, setChargingCopy] = useState({})
    const [charging, setCharging] = useState({})
    const [rangeCopy, setCopy] = useState({})
    const [errors, setError] = useState({})
    const [range, setRange] = useState({})

    // Set test data
    useEffect(() => {
        setRange({ ...test })
        setCopy({ ...test })
        setCharging({ ...test['chargingTo75Percent'] })
        setChargingCopy({ ...test['chargingTo75Percent'] })
    }, [test])

    // If user cancels editing set previous test data
    useEffect(() => {
        if (editing === false) {
            setRange({ ...rangeCopy })
            setCharging({ ...chargingCopy })
        }
    }, [editing, rangeCopy, chargingCopy])

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        if (!charging.time) valid.time = 'Field required'

        // Check if any value is missing
        if (!range.season) valid.season = 'Field required'
        if (!range.surface) valid.surface = 'Field required'
        if (!range.tires) valid.tires = 'Field required'
        if (!range.averageSpeed) valid.averageSpeed = 'Field required'
        if (!range.batteryCapacity) valid.batteryCapacity = 'Field required'
        if (!range.km) valid.km = 'Field required'
        if (!range.mi) valid.mi = 'Field required'

        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        patch(range)
    }, [submit, range, charging, patch, errors, setError, setSubmit])

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
        return setRange({ ...range, [e.name]: e.type === 'number' ? parseInt(e.value) : e.value })
    }

    const setChargingProperty = (e) => {
        validate(e.name, e.type, e.value, parseInt(e.min), parseInt(e.max))
        setCharging({ ...charging, [e.name]: parseInt(e.value) })
        return setRange({ ...range, chargingTo75Percent: { ...charging, [e.name]: parseInt(e.value) } })
    }

    return (
        <Wrapper>
            <TInput title="Season" name="season" placeholder="Season" value={range.season || ''} onChange={setProperty} type="text" maxlength="10" error={errors.season} disabled={loading || !editing} />
            <TInput title="Surface" name="surface" placeholder="Surface" value={range.surface || ''} onChange={setProperty} type="text" maxlength="10" error={errors.surface} disabled={loading || !editing} />
            <TInput title="Temperature" name="temperature" placeholder="Temperature" value={range.temperature || ''} onChange={setProperty} type="number" step="1" min="-50" max="70" error={errors.temperature} disabled={loading || !editing} />
            <TInput title="Tires" name="tires" placeholder="Tires" value={range.tires || ''} onChange={setProperty} type="text" maxlength="50" error={errors.tires} disabled={loading || !editing} />
            <TInput title="Wheel front" name="wheelFront" placeholder="Wheel front" value={range.wheelFront || ''} onChange={setProperty} type="text" maxlength="15" error={errors.wheelFront} disabled={loading || !editing} />
            <TInput title="Wheel rear" name="wheelRear" placeholder="Wheel rear" value={range.wheelRear || ''} onChange={setProperty} type="text" maxlength="15" error={errors.wheelRear} disabled={loading || !editing} />
            <TInput title="Average speed" name="averageSpeed" placeholder="Average speed" value={range.averageSpeed || ''} onChange={setProperty} type="number" step="1" min="1" max="300" error={errors.averageSpeed} disabled={loading || !editing} />
            <TInput title="wh per km" name="whPerKm" placeholder="Wh per km" value={range.whPerKm || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.whPerKm} disabled={loading || !editing} />
            <TInput title="Battery capacity" name="batteryCapacity" placeholder="Battery capacity" value={range.batteryCapacity || ''} onChange={setProperty} type="number" step="any" min="0" max="1000" error={errors.batteryCapacity} disabled={loading || !editing} />
            <TInput title="Kilometers" name="km" placeholder="Kilometers" value={range.km || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.km} disabled={loading || !editing} />
            <TInput title="Miles" name="mi" placeholder="Miles" value={range.mi || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.mi} disabled={loading || !editing} />
            <TInput title="Range with 75%" name="rangeWith75Percent" placeholder="Range with 75%" value={range.rangeWith75Percent || ''} onChange={setProperty} type="number" step="1" min="0" max="1000" error={errors.rangeWith75Percent} disabled={loading || !editing} />
            <TInput title="Charging time to 75%" name="time" placeholder="Charging time to 75%" value={charging.time || ''} onChange={setChargingProperty} type="number" step="1" min="0" max="200" error={errors.time} disabled={loading || !editing} />
            <TInput title="Charging speed in kmph" name="kmPerHour" placeholder="Charging speed" value={charging.kmPerHour || ''} onChange={setChargingProperty} type="number" step="1" min="0" max="2000" error={errors.kmPerHour} disabled={loading || !editing} />
        </Wrapper>
    )
}

export { Range }