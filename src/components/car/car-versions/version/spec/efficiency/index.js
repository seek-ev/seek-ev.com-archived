import React, { useEffect, useState } from 'react'

const SpecEfficiency = (props) => {
    const [efficiency, setEfficiency] = useState({})

    useEffect(() => {
        if (props.efficiency) setEfficiency(props.efficiency)
    }, [props.efficiency])

    return (
        <div className={`${props.efficiency ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Efficiency
            </div>
            <div className="car-version-spec-item-content">
                <div className="car-version-spec-item-content-item">
                    <span>Miles per galon:</span> {efficiency.mpg}
                </div>
                <div className="car-version-spec-item-content-item">
                    <span>Kilometers per liter:</span> {efficiency.kpl}
                </div>
            </div>
        </div>
    )
}

export { SpecEfficiency }