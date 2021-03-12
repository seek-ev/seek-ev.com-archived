import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, TInput, Times, Note } from '../types'

const Acceleration = ({ test, editing, submit, setSubmit, patch, loading }) => {
    const [accelerationCopy, setAccelerationCopy] = useState({})
    const [acceleration, setAcceleration] = useState({})
    const [timesCopy, setTimesCopy] = useState({})
    const [errors, setError] = useState({})
    const [times, setTime] = useState({})

    // Set test data
    useEffect(() => {
        setAcceleration({ ...test })
        setAccelerationCopy({ ...test })
        setTime({ ...test['times'] })
        setTimesCopy({ ...test['times'] })
    }, [test])

    // If user cancels editing set previous test data
    useEffect(() => {
        if (editing === false) {
            setAcceleration({ ...accelerationCopy })
            setTime({ ...timesCopy })
        }
    }, [editing, accelerationCopy, timesCopy])

    useEffect(() => {
        // If form was not submitted don't validate
        if (!submit) return

        // Errors
        const valid = {}

        // Check if any value is missing in times
        if (!times._0to100) valid._0to100 = 'Field required'

        // Check if any value is missing in acceleration
        if (!acceleration.tires) valid.tires = 'Field required'
        if (!acceleration.specTime) valid.specTime = 'Field required'
        if (!acceleration.test_vs_spec) valid.test_vs_spec = 'Field required'

        // Set errors if any occurs
        setError({ ...errors, ...valid })

        // Set submit as false so user will have to submit form again
        setSubmit(false)

        // Check if form is valid
        if (Object.keys(valid).length || Object.keys(errors).length > 0) return

        // Pass data to parent
        patch(acceleration)
    }, [submit, acceleration, times, patch, errors, setError, setSubmit])

    const validate = async (name, type, value) => {
        if (type !== 'number' || value >= 0) {
            const errClone = { ...errors }
            delete errClone[name]
            return setError(errClone)
        }
        else return setError({ ...errors, [name]: 'It has to be a positive number' })
    }

    const validateTime = (id, name, value) => {
        const maxValue = parseInt(id.split('_')[1]) * 5
        if (value > maxValue) return setError({ ...errors, [name]: `Maximum number is ${maxValue}` })
        else if (value < 0) return setError({ ...errors, [name]: 'Minimum number is 0!' })
        else {
            const errClone = { ...errors }
            delete errClone[name]
            return setError(errClone)
        }
    }

    const setProperty = (e) => {
        validate(e.name, e.type, e.value)
        return setAcceleration({ ...acceleration, [e.name]: e.type === 'number' ? parseInt(e.value) : e.value })
    }

    const setTimeProperty = (e) => {
        validateTime(e.id, e.name, e.value)
        setTime({ ...times, [e.name]: parseInt(e.value) })
        return setAcceleration({ ...acceleration, times: { ...times, [e.name]: parseInt(e.value) } })
    }

    return (
        <Wrapper>
            <TInput title="Tires" name="tires" placeholder="Tires" value={acceleration.tires || ''} onChange={setProperty} type="text" error={errors.tires} disabled={loading || !editing} />
            <TInput title="Wheel front" name="wheelFront" placeholder="Wheel front" value={acceleration.wheelFront || ''} onChange={setProperty} type="text" error={errors.wheelFront} disabled={loading || !editing} />
            <TInput title="Wheel rear" name="wheelRear" placeholder="Wheel rear" value={acceleration.wheelRear || ''} onChange={setProperty} type="text" error={errors.wheelRear} disabled={loading || !editing} />
            <TInput title="Spec time (0 - 100km/h)" name="specTime" placeholder="Spec time" value={acceleration.specTime || ''} onChange={setProperty} type="number" step="1" min="0" error={errors.specTime} disabled={loading || !editing} />
            <TInput title="Test vs Spec" name="test_vs_spec" placeholder="Test vs Spec" value={acceleration.test_vs_spec || ''} onChange={setProperty} type="number" step="1" min="-50" error={errors.test_vs_spec} disabled={loading || !editing} />

            <Times>
                <TInput id="accinput_1" title="From 0 to 10 km/h" name="_0to10" placeholder="0 to 10 km/h" value={times._0to10 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to10} disabled={loading || !editing} />
                <TInput id="accinput_2" title="From 0 to 20 km/h" name="_0to20" placeholder="0 to 20 km/h" value={times._0to20 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to20} disabled={loading || !editing} />
                <TInput id="accinput_3" title="From 0 to 30 km/h" name="_0to30" placeholder="0 to 30 km/h" value={times._0to30 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to30} disabled={loading || !editing} />
                <TInput id="accinput_4" title="From 0 to 40 km/h" name="_0to40" placeholder="0 to 40 km/h" value={times._0to40 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to40} disabled={loading || !editing} />
                <TInput id="accinput_5" title="From 0 to 50 km/h" name="_0to50" placeholder="0 to 50 km/h" value={times._0to50 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to50} disabled={loading || !editing} />
                <TInput id="accinput_6" title="From 0 to 60 km/h" name="_0to60" placeholder="0 to 60 km/h" value={times._0to60 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to60} disabled={loading || !editing} />
                <TInput id="accinput_7" title="From 0 to 70 km/h" name="_0to70" placeholder="0 to 70 km/h" value={times._0to70 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to70} disabled={loading || !editing} />
                <TInput id="accinput_8" title="From 0 to 80 km/h" name="_0to80" placeholder="0 to 80 km/h" value={times._0to80 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to80} disabled={loading || !editing} />
                <TInput id="accinput_9" title="From 0 to 90 km/h" name="_0to90" placeholder="0 to 90 km/h" value={times._0to90 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to90} disabled={loading || !editing} />
                <TInput id="accinput_10" title="From 0 to 100 km/h" name="_0to100" placeholder="0 to 100 km/h" value={times._0to100 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to100} disabled={loading || !editing} />
                <TInput id="accinput_11" title="From 0 to 200 km/h" name="_0to200" placeholder="0 to 200 km/h" value={times._0to200 || ''} onChange={setTimeProperty} type="number" step="1" min="-50" error={errors._0to200} disabled={loading || !editing} />
            </Times>
            <Note>*Provide time in seconds (ex. 4.2 sec from 0 to 100km/h)</Note>
        </Wrapper>
    )
}

export { Acceleration }