import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, NoTimeline, Buttons, Loading, Bounce } from './styles'

// Components
import { VersionSelect } from './select'
import { Button } from 'components/basic/button'

// Actions
import { showSnackbar } from 'actions/snackbar'

const VersionStep = ({ car, previousStep, next }) => {
    const [timeline, setTimeline] = useState([])
    const [loading, setLoading] = useState(true)
    const [chosenCar, setCar] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            await setLoading(true)
            await axios.get(`/cars/id/${car.id}`).then(res => setTimeline(res.data.timeline)).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        fetch()
    }, [dispatch, car])

    const setVersion = useCallback((v, t) => {
        const version = t.versions.find(version => version.id === parseInt(v))
        const line = { ...t, car }
        const ver = { ...version, timeline: line }
        setCar({ version: ver })
    }, [car])

    return (
        <Wrapper>
            <Title>Choose production year and version</Title>

            {loading ? <Loading>
                <Bounce one />
                <Bounce two />
                <Bounce />
            </Loading> :
                timeline.length > 0 ? <VersionSelect timeline={timeline} setVersion={setVersion} /> :
                    <NoTimeline>You can't choose this car because it doesn't have timeline added.</NoTimeline>
            }

            <Buttons>
                <Button text="Back" blue onClick={() => previousStep(1)} />
                <Button text="Continue" primary onClick={() => next(chosenCar)} disabled={!chosenCar.version && loading} />
            </Buttons>
        </Wrapper>
    )
}

export { VersionStep }