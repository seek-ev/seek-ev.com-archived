import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContentRow, SpecItemContentItem, VersionMarginRight, VersionNoMaring } from '../styles'

const SpecEnergyUsage = (props) => {
    const [energyUsage, setEnergyUsage] = useState({})

    useEffect(() => {
        if (props.energyUsage) setEnergyUsage(props.energyUsage)
    }, [props.energyUsage])

    return (
        <SpecItem show={props.energyUsage}>
            <SpecItemContentTitle>
                Energy Usage
            </SpecItemContentTitle>
            <SpecItemContentRow>
                <VersionMarginRight>
                    {energyUsage.mi ? <SpecItemContentItem>
                        <span>Per mi:</span> {energyUsage.mi}wh
                    </SpecItemContentItem>
                        : ''}
                    {energyUsage.km ? <SpecItemContentItem>
                        <span>Per km:</span> {energyUsage.km}wh
                    </SpecItemContentItem>
                        : ''}
                </VersionMarginRight>
                <VersionNoMaring>
                    <SpecItemContentItem>
                        <span>Per 100 mi:</span> {energyUsage.mi_100}wh
                    </SpecItemContentItem>
                    <SpecItemContentItem>
                        <span>Per 100 km:</span> {energyUsage.km_100}wh
                    </SpecItemContentItem>
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem>
    )
}

export { SpecEnergyUsage }