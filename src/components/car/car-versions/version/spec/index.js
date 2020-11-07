import React, { useEffect, useState } from 'react'

// Styles
import './spec.sass'

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
        <div className='car-version-spec'>
            <div className="car-version-spec-title">Specification:</div>
            <div className="car-version-spec-header">
                <div className='car-version-spec-header-item'>
                    <span>Drive train:</span> {spec.driveTrain}
                </div>
                <div className={`${spec.engines ? 'car-version-spec-header-item' : 'car-version-item-hidden'}`}>
                    <span>Number of Engines:</span> {spec.engines ? spec.engines : ''}
                </div>
                <div className='car-version-spec-header-item'>
                    <span>0-60 mph:</span> {spec.acceleration}s
                </div>
            </div>
            <div className="car-version-spec-details">
                <SpecRange range={spec.range} />
                <SpecEnergyUsage energyUsage={spec.energyUsage} />
                <SpecEngine engine={spec.engine} />
                <SpecChargingSpeeds chargingSpeeds={spec.chargingSpeed} />
                <SpecTopSpeed topSpeed={spec.topSpeed} />
                <SpecEfficiency efficiency={spec.efficiency} />
                <SpecCapacity capacity={spec.capacity} />
                <SpecBattery battery={spec.battery} />
            </div>
        </div>
    )
}

export { VersionSpec }