import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import './timeline.sass'

// Components
import { Select } from 'components/basic/select'
import { Button } from 'components/basic/button'

// Actions
import { showSnackbar } from 'actions/snackbar'

const OwnedCarAddModalTimeline = (props) => {
    const [loading, setLoading] = useState(false)
    const [timeline, setTimeline] = useState({})
    const [car, setCar] = useState({})
    const dispatch = useDispatch()

    const onTimelineChange = (e) => {
        if (!car.timeline) return
        const found = car.timeline.find(c => c.id === parseInt(e.value))
        setTimeline(found)
    }

    const nextStep = () => {
        props.setVersions(timeline.versions, timeline.id)
    }

    const previousStep = () => {
        props.setStep(0)
    }

    useEffect(() => {
        setLoading(true)

        // Fetch chosen car
        const fetchCar = async () => {
            await axios.get(`/cars/id/${props.car.id}`).then(res => {
                if (res.data.timeline.length > 0) setTimeline(res.data.timeline[0])
                setCar(res.data)
            }).catch(err => {
                setCar(null)
                dispatch(showSnackbar(err, 'error'))
            })
        }

        if (props.car.id) fetchCar()
        setLoading(false)
    }, [props.car, dispatch])

    return (
        <div className="chosen-car">
            <div className={`${loading ? 'chosen-loading' : 'cars-hidden'}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`${(!loading && car) && (car.timeline && car.timeline.length > 0) ? 'choose-timeline' : 'cars-hidden'}`}>
                <Select name="owned-timeline" options={car.timeline} display="year" value="id" onChange={onTimelineChange} />
                <span className={`${timeline.versions && timeline.versions.length === 0 ? 'chosen-timeline-error' : 'cars-hidden'}`}>Ops, this car doesn't have versions from {timeline.year}</span>
                <div className="choose-timeline-button">
                    <div className="choose-timeline-button-mr">
                        <Button text="Go back" onClick={previousStep} />
                    </div>
                    <Button text="Next" onClick={nextStep} primary disabled={timeline.versions && timeline.versions.length === 0} />
                </div>
            </div>
            <div className={`${!loading && car.timeline && car.timeline.length === 0 ? 'choose-error' : 'cars-hidden'}`}>
                Unfortunately this car doesn't have a timeline
                <div className="choose-timeline-button">
                    <Button text="Go back" onClick={previousStep} />
                </div>
            </div>
        </div >
    )
}


export { OwnedCarAddModalTimeline }