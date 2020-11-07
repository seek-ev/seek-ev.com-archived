import React, { useEffect, useState } from 'react'

// Styles
import './versions.sass'

// Components
import { CarVersion } from './version'

const CarVersions = (props) => {
    const [versions, setVersions] = useState([])
    const [version, setVersion] = useState(0)

    useEffect(() => {
        if (props.versions && props.versions.length > 0) setVersions(props.versions)
    }, [props.versions])

    return (
        <div className="car-versions">
            <div className={versions.length > 0 ? 'car-versions-display' : 'car-versions-hidden'}>
                <div className={`${versions.length === 1 ? 'car-versions-hidden' : 'car-version-select-title'}`}>Choose version</div>
                <div className={`${versions.length === 1 ? 'car-versions-hidden' : 'car-versions-select'}`}>
                    {versions.map((v, index) => {
                        return <div className={`car-version-button ${version === index ? 'car-version-chose' : ''}`} key={v.id} onClick={() => setVersion(index)}>{v.name}</div>
                    })}
                </div>
                <div className="car-version-item">
                    <CarVersion version={versions[version]} />
                </div>
            </div>

            <div className={versions.length === 0 ? 'car-versions-none' : 'car-versions-hidden'}>
                We don't have any details about this car
            </div>
        </div >
    )
}

export { CarVersions }