import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContent, SpecItemContentItem } from '../styles'

const SpecTopSpeed = (props) => {
    const [topSpeed, setTopSpeed] = useState({})

    useEffect(() => {
        if (props.topSpeed) setTopSpeed(props.topSpeed)
    }, [props.topSpeed])

    return (
        <SpecItem show={props.topSpeed}>
            <SpecItemContentTitle>
                Top Speed
            </SpecItemContentTitle>
            <SpecItemContent>
                <SpecItemContentItem>
                    <span>Miph:</span> {topSpeed.miph}
                </SpecItemContentItem>
                <SpecItemContentItem>
                    <span>Kmph:</span> {topSpeed.kmph}
                </SpecItemContentItem>
            </SpecItemContent>
        </SpecItem>
    )
}

export { SpecTopSpeed }