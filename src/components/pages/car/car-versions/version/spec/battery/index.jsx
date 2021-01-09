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
            <SpecItemContentTitle>
                Battery
            </SpecItemContentTitle>
            <SpecItemContentRow>
                <VersionMarginRight >
                    <SpecItemContentItem>
                        <span>Capacity:</span> {battery.capacity}kw
                    </SpecItemContentItem>
                    <SpecItemContentItem>
                        <span>Usable:</span> {battery.usableCapacity}kw
                    </SpecItemContentItem>
                </VersionMarginRight>
                <VersionNoMaring>
                    {battery.type ? <SpecItemContentItem>
                        <span>Type:</span> {battery.type}
                    </SpecItemContentItem> : ''}

                    {battery.cooling ? <SpecItemContentItem>
                        <span>Cooling:</span> {battery.cooling}
                    </SpecItemContentItem> : ''}
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem>
    )
}

export { SpecBattery }