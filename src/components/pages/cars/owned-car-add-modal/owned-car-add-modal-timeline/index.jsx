import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Timeline, TimelineButton, TimelineButtonMr, TimelineError, ChooseError, Loading } from './styles'

// Components
import { Select } from 'components/basic/select'
import { Button } from 'components/basic/button'

// Actions
import { showSnackbar } from 'actions/snackbar'

const OwnedCarAddModalTimeline = (props) => {
    const [loading, setLoading] = useState(true)
    const [timeline, setTimeline] = useState({})
    const [car, setCar] = useState({})
    const dispatch = useDispatch()

    const onTimelineChange = (e) => {
        if (!car.timeline) return
        const found = car.timeline.find(c => c.id === parseInt(e))
        setTimeline(found)
    }

    const nextStep = () => {
        props.setVersions(timeline.versions, timeline.id)
    }

    const previousStep = () => {
        props.setStep(0)
    }

    useEffect(() => {
        // Fetch chosen car
        const fetchCar = async () => {
            await setLoading(true)

            await axios.get(`/cars/id/${props.car.id}`).then(res => {
                if (res.data.timeline.length > 0) setTimeline(res.data.timeline[0])
                setCar(res.data)
            }).catch(err => {
                setCar(null)
                dispatch(showSnackbar(err, 'error'))
            })

            await setLoading(false)
        }

        if (props.car.id) fetchCar()
    }, [props.car, dispatch])

    return (
        <Wrapper>
            {loading ? <Loading>
                <div></div>
                <div></div>
                <div></div>
            </Loading> : ''}

            {(!loading && car) && (car.timeline && car.timeline.length > 0) ?
                <Timeline>
                    <Select name="owned-timeline" options={car.timeline} display="year" value="id" onChange={onTimelineChange} />
                    {timeline.versions && timeline.versions.length === 0 ? <TimelineError>Ops, this car doesn't have versions from {timeline.year}</TimelineError> : ''}
                    <TimelineButton>
                        <TimelineButtonMr>
                            <Button text="Go back" onClick={previousStep} />
                        </TimelineButtonMr>
                        <Button text="Next" onClick={nextStep} primary disabled={timeline.versions && timeline.versions.length === 0} />
                    </TimelineButton>
                </Timeline>
                : ''}

            {!loading && (car.timeline && car.timeline.length === 0) ? <ChooseError>
                Unfortunately this car doesn't have a timeline
                <TimelineButton>
                    <Button text="Go back" onClick={previousStep} />
                </TimelineButton>
            </ChooseError> : ''}
        </Wrapper>
    )
}


export { OwnedCarAddModalTimeline }