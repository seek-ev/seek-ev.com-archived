import React, { useEffect, useState } from 'react'

const SpecEngine = (props) => {
    const [engine, setEngine] = useState({})

    useEffect(() => {
        if (props.engine) setEngine(props.engine)
    }, [props.engine])

    return (
        <div className={`${props.engine ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Engine
            </div>
            <div className="car-version-spec-item-content-row ">
                <div className="version-mr-12">
                    <div className="car-version-spec-item-content-item">
                        <span>Power in kw:</span> {engine.kw}
                    </div>
                    <div className="car-version-spec-item-content-item">
                        <span>Power in hp:</span> {engine.hp}
                    </div>
                </div>
                <div>
                    <div className={`${engine.torque ? 'car-version-spec-item-content-item' : 'car-version-item-hidden'}`}>
                        <span>Torque:</span> {engine.torque}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SpecEngine }