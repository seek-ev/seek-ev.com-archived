import React, { useEffect, useState } from 'react'

// Styles
import './version.sass'

// Components
import { VersionSpec } from './spec'

const CarVersion = (props) => {
    const [version, setVersion] = useState({ spec: {} })

    useEffect(() => {
        if (props.version) setVersion(props.version)
    }, [props.version])

    return (
        <div className="car-version">
            <div className="car-version-title">
                {version.name}
            </div>
            <div className="car-version-description">{version.description}</div>
            <div className='car-version-details'>
                <VersionSpec spec={version.spec} />
            </div>
        </div >
    )
}

export { CarVersion }   