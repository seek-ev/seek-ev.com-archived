import React, { useEffect, useState } from 'react'

const SpecChargingSpeeds = (props) => {
    const [chargingSpeeds, setChargingSpeeds] = useState({})

    useEffect(() => {
        if (props.chargingSpeeds) setChargingSpeeds(props.chargingSpeeds)
    }, [props.chargingSpeeds])

    return (
        <div className={`${props.chargingSpeeds ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Charging Speeds
            </div>
            <div className="car-version-spec-item-content">
                <div className={`${chargingSpeeds.avarage ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                    <span>Avarage:</span> {chargingSpeeds.avarage}kw
                    </div>
                <div className="car-version-spec-item-content-item">
                    <span>Max:</span> {chargingSpeeds.max}kw
                </div>
            </div>
        </div>
    )
}

export { SpecChargingSpeeds }