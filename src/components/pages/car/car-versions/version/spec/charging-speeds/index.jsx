import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContent, SpecItemContentItem } from '../styles'

const SpecChargingSpeeds = (props) => {
    const [chargingSpeeds, setChargingSpeeds] = useState({})

    useEffect(() => {
        if (props.chargingSpeeds) setChargingSpeeds(props.chargingSpeeds)
    }, [props.chargingSpeeds])

    return (
        <SpecItem show={props.chargingSpeeds}>
            <SpecItemContentTitle>
                Charging Speeds
            </SpecItemContentTitle>
            <SpecItemContent>
                {chargingSpeeds.avarage ? <SpecItemContentItem>
                    <span>Avarage:</span> {chargingSpeeds.avarage}kw
                </SpecItemContentItem> : ''}
                <SpecItemContentItem>
                    <span>Max:</span> {chargingSpeeds.max}kw
                </SpecItemContentItem>
            </SpecItemContent>
        </SpecItem>
    )
}

export { SpecChargingSpeeds }