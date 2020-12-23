import React, { useEffect, useState } from 'react'

const SpecBattery = (props) => {
    const [battery, setBattery] = useState({})

    useEffect(() => {
        if (props.battery) setBattery(props.battery)
    }, [props.battery])

    return (
        <div className={`${props.battery ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Battery
            </div>
            <div className="car-version-spec-item-content-row">
                <div className="version-mr-12">
                    <div className="car-version-spec-item-content-item">
                        <span>Capacity:</span> {battery.capacity}kw
                    </div>
                    <div className="car-version-spec-item-content-item">
                        <span>Usable:</span> {battery.usableCapacity}kw
                    </div>
                </div>
                <div>
                    <div className={`${battery.type ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Type:</span> {battery.type}
                    </div>
                    <div className={`${battery.cooling ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Cooling:</span> {battery.cooling}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SpecBattery }