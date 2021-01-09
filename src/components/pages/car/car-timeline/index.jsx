import React, { useState, useEffect } from 'react'


// Styles
import { Wrapper, HeaderWrapper, Header, Title, HeaderSelect, NoneTimeline } from './styles'

// Components
import { Select } from 'components/basic/select'
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
        <Wrapper>
            {timeline && timeline.length > 0 ? <HeaderWrapper> <Header>
                <Title>
                    Choose production year
                    </Title>
                <HeaderSelect>
                    <Select name="timeline" options={timeline} display="year" value="id" onChange={onTimelineChange} />
                </HeaderSelect>
            </Header>
                <CarVersions versions={disTimeline} year={year} />
            </HeaderWrapper> : <NoneTimeline>
                    We don't have any details about this car
            </NoneTimeline>
            }
        </Wrapper >
    )
}


export { CarTimeline }