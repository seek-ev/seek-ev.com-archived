import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContentRow, SpecItemContentItem, VersionMarginRight, VersionNoMaring } from '../styles'

const SpecEngine = (props) => {
    const [engine, setEngine] = useState({})

    useEffect(() => {
        if (props.engine) setEngine(props.engine)
    }, [props.engine])

    return (
        <SpecItem show={props.range}>
            <SpecItemContentTitle>
                Engine
            </SpecItemContentTitle>
            <SpecItemContentRow>
                <VersionMarginRight className="version-mr-12">
                    <SpecItemContentItem>
                        <span>Power in kw:</span> {engine.kw}
                    </SpecItemContentItem>
                    <SpecItemContentItem>
                        <span>Power in hp:</span> {engine.hp}
                    </SpecItemContentItem>
                </VersionMarginRight>
                <VersionNoMaring>
                    {engine.torque ? <SpecItemContentItem>
                        <span>Torque:</span> {engine.torque}Nm
                    </SpecItemContentItem>
                        : ''}
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem>
    )
}

export { SpecEngine }