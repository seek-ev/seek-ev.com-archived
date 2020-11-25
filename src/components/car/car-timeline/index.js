import React, { useState, useEffect } from 'react'

// Style
import './timeline.sass'

// Components
import { Select } from '../../basic/select'
import { CarVersions } from '../car-versions'

const CarTimeline = (props) => {
    const [timeline, setTimeline] = useState(null)
    const [disTimeline, setDisTimeline] = useState(null)
    const [year, setYear] = useState(null)

    useEffect(() => {
        if (!props.timeline || props.timeline.length === 0) return
        setTimeline(props.timeline.sort((a, b) => b.year - a.year))
        setDisTimeline(props.timeline[0].versions)
        setYear(props.timeline[0].year)
    }, [props.timeline])

    const onTimelineChange = (e) => {
        const found = timeline.find(t => t.id === parseInt(e.value))
        setDisTimeline(found.versions)
        setYear(found.year)
    }

    return (
        <div className="car-timeline">
            <div className={timeline && timeline.length > 0 ? '' : 'car-timeline-hidden'}>
                <div className="car-timeline-header">
                    <div className="car-timeline-header-title">
                        Choose production year
                </div>
                    <div className="car-timeline-header-select">
                        <Select name="timeline" options={timeline} display="year" value="id" onChange={onTimelineChange} />
                    </div>
                </div>
                <CarVersions versions={disTimeline} year={year} />
            </div>

            <div className={timeline && timeline.length === 0 ? 'car-timeline-none' : 'car-timeline-hidden'}>
                We don't have any details about this car
            </div>
        </div>
    )
}


export { CarTimeline }