import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, Item, NoVersions } from './styles'

// Components
import { Select } from 'components/basic/select'

const VersionSelect = ({ timeline, setVersion }) => {
    const [chosenTimeline, setTimeline] = useState(null)

    useEffect(() => {
        setTimeline(timeline[0])
        if (timeline[0] && timeline[0].versions.length > 0) setVersion(timeline[0].versions[0].id, timeline[0])
    }, [timeline, setVersion])

    const chooseTimeline = (id) => {
        if (!id) return
        const found = timeline.find(t => t.id === parseInt(id))
        setTimeline(found)
        if (found.versions.length > 0) setVersion(found.versions[0].id, found)
    }

    return (
        <Wrapper>
            <Item>
                Timeline:
                <Select options={timeline} value="id" display="year" name="timeline" onChange={(t) => chooseTimeline(t)} />
            </Item>

            {chosenTimeline ? chosenTimeline.versions.length > 0 ? <Item>
                Version:
                <Select options={chosenTimeline.versions} value="id" display="name" name="version" onChange={(v) => setVersion(v.value, chosenTimeline)} />
            </Item> : <NoVersions>This timeline has no versions, you can't choose it.</NoVersions> : ''}
        </Wrapper>
    )
}

export { VersionSelect }