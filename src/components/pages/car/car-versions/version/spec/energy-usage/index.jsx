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
                        {energyUsage.mi}<span> wh per mile</span>
                    </SpecItemContentItem>
                        : ''}
                    {energyUsage.km ? <SpecItemContentItem>
                        {energyUsage.km}<span> wh per km</span>
                    </SpecItemContentItem>
                        : ''}
                </VersionMarginRight>
                <VersionNoMaring>
                    <SpecItemContentItem>
                        {energyUsage.mi_100 > 999 ? energyUsage.mi_100 / 1000 : energyUsage.mi_100}<span>{energyUsage.mi_100 > 999 ? ' kWh' : ' wh'} per 100 miles</span>
                    </SpecItemContentItem>
                    <SpecItemContentItem>
                        {energyUsage.km_100 > 999 ? energyUsage.km_100 / 1000 : energyUsage.km_100}<span>{energyUsage.km_100 > 999 ? ' kWh' : ' wh'} per 100 km</span>
                    </SpecItemContentItem>
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem >
    )
}

export { SpecEnergyUsage }