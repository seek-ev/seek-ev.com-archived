import React, { useEffect, useState } from 'react'

const SpecRange = (props) => {
    const [range, setRange] = useState({ epa: {}, wltp: {} })

    useEffect(() => {
        if (props.range) setRange(props.range)
    }, [props.range])

    return (
        <div className={`${props.range ? 'car-version-spec-item' : 'car-version-item-hidden'}`}>
            <div className="car-version-spec-item-title">
                Range
            </div>
            <div className="car-version-spec-item-content-row">
                <div className="version-mr-12">
                    <div className="car-version-spec-item-content-item">
                        <span>EPA Km:</span> {range.epa.km}
                    </div>
                    <div className="car-version-spec-item-content-item">
                        <span>EPA Mi:</span> {range.epa.mi}
                    </div>
                </div>
                <div>
                    <div className="car-version-spec-item-content-item">
                        <span>WLTP Km:</span> {range.wltp.km}
                    </div>
                    <div className="car-version-spec-item-content-item">
                        <span>WLTP Mi:</span> {range.wltp.mi}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SpecRange }