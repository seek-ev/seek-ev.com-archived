import React, { useEffect, useState } from 'react'

const SpecTopSpeed = (props) => {
    const [topSpeed, setTopSpeed] = useState({})

    useEffect(() => {
        if (props.topSpeed) setTopSpeed(props.topSpeed)
    }, [props.topSpeed])

    return (
        <div className={`${props.topSpeed ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Top Speed
            </div>
            <div className="car-version-spec-item-content">
                <div className="car-version-spec-item-content-item">
                    <span>Miph:</span> {topSpeed.miph}
                </div>
                <div className="car-version-spec-item-content-item">
                    <span>Kmph:</span> {topSpeed.kmph}
                </div>
            </div>
        </div>
    )
}

export { SpecTopSpeed }