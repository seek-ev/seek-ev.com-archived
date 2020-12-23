import React, { useEffect, useState } from 'react'

const SpecCapacity = (props) => {
    const [capacity, setCapacity] = useState({})

    useEffect(() => {
        if (props.capacity) setCapacity(props.capacity)
    }, [props.capacity])

    return (
        <div className={`${props.capacity ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Capacity
            </div>
            <div className="car-version-spec-item-content-row">
                <div className="version-mr-12">
                    <div className="car-version-spec-item-content-item">
                        <span>Passengers:</span> {capacity.passengers} seats
                    </div>
                    <div className={`${capacity.cargoSpace ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Cargo space:</span> {capacity.cargoSpace}l
                    </div>
                </div>
                <div>
                    <div className={`${capacity.towingKG ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Towing in kg:</span> {capacity.towingKG}kg
                    </div>
                    <div className={`${capacity.towingLB ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Towing in lb:</span> {capacity.towingLB}lb
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SpecCapacity }