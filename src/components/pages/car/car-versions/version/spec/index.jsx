import React, { useEffect, useState } from 'react'

// Styles
import {
    Wrapper,
    Title,
    Header,
    HeaderItem,
    Details
} from './styles'

// Components
import { SpecRange } from './range'
import { SpecEngine } from './engine'
import { SpecBattery } from './battery'
import { SpecCapacity } from './capacity'
import { SpecTopSpeed } from './top-speed'
import { SpecEfficiency } from './efficiency'
import { SpecEnergyUsage } from './energy-usage'
import { SpecChargingSpeeds } from './charging-speeds'

const VersionSpec = (props) => {
    const [spec, setSpec] = useState({})

    useEffect(() => {
        if (props.spec) setSpec(props.spec)
    }, [props.spec])

    return (
        <Wrapper>
            <Title>Specification:</Title>
            <Header>
                <HeaderItem>
                    <span>Drive train:</span> {spec.driveTrain}
                </HeaderItem>
                {spec.engines ? <HeaderItem>
                    <span>Motors:</span> {spec.engines ? spec.engines : ''}
                </HeaderItem> : ''}
                <HeaderItem>
                    <span>0-60 mph:</span> {spec.acceleration}s
                </HeaderItem>
            </Header>
            <Details>
                <SpecRange range={spec.range} />
                <SpecEnergyUsage energyUsage={spec.energyUsage} />
                <SpecEngine engine={spec.engine} />
                <SpecChargingSpeeds chargingSpeeds={spec.chargingSpeed} />
                <SpecTopSpeed topSpeed={spec.topSpeed} />
                <SpecEfficiency efficiency={spec.efficiency} />
                <SpecCapacity capacity={spec.capacity} />
                <SpecBattery battery={spec.battery} />
            </Details>
        </Wrapper>
    )
}

export { VersionSpec }