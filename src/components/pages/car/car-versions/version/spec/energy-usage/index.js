import React, { useEffect, useState } from 'react'

const SpecEnergyUsage = (props) => {
    const [energyUsage, setEnergyUsage] = useState({})

    useEffect(() => {
        if (props.energyUsage) setEnergyUsage(props.energyUsage)
    }, [props.energyUsage])

    return (
        <div className={`${props.energyUsage ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Energy Usage
            </div>
            <div className="car-version-spec-item-content-row">
                <div className="version-mr-12">
                    <div className={`${energyUsage.mi ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Per mi:</span> {energyUsage.mi}wh
                    </div>
                    <div className={`${energyUsage.km ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Per km:</span> {energyUsage.km}wh
                    </div>
                </div>
                <div>
                    <div className="car-version-spec-item-content-item">
                        <span>Per 100 mi:</span> {energyUsage.mi_100}wh
                    </div>
                    <div className="car-version-spec-item-content-item">
                        <span>Per 100 km:</span> {energyUsage.km_100}wh
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SpecEnergyUsage }