import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContentRow, SpecItemContentItem, VersionMarginRight, VersionNoMaring } from '../styles'

const SpecBattery = (props) => {
    const [battery, setBattery] = useState({})

    useEffect(() => {
        if (props.battery) setBattery(props.battery)
    }, [props.battery])

    return (
        <SpecItem show={props.battery}>
            <SpecItemContentTitle className="car-version-spec-item-title">
                Battery
            </SpecItemContentTitle>
            <SpecItemContentRow className="car-version-spec-item-content-row">
                <VersionMarginRight className="version-mr-12">
                    <SpecItemContentItem className="car-version-spec-item-content-item">
                        <span>Capacity:</span> {battery.capacity}kw
                    </SpecItemContentItem>
                    <SpecItemContentItem className="car-version-spec-item-content-item">
                        <span>Usable:</span> {battery.usableCapacity}kw
                    </SpecItemContentItem>
                </VersionMarginRight>
                <VersionNoMaring>
                    <SpecItemContentItem className={`${battery.type ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Type:</span> {battery.type}
                    </SpecItemContentItem>
                    <SpecItemContentItem className={`${battery.cooling ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Cooling:</span> {battery.cooling}
                    </SpecItemContentItem>
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem>
    )
}

export { SpecBattery }