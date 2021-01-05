import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContentRow, SpecItemContentItem, VersionMarginRight, VersionNoMaring } from '../styles'

const SpecRange = (props) => {
    const [range, setRange] = useState({ epa: {}, wltp: {} })

    useEffect(() => {
        if (props.range) setRange(props.range)
    }, [props.range])

    return (
        <SpecItem show={props.range}>
            <SpecItemContentTitle>
                Range
            </SpecItemContentTitle>
            <SpecItemContentRow>
                <VersionMarginRight className="version-mr-12">
                    <SpecItemContentItem>
                        <span>EPA Km:</span> {range.epa.km}
                    </SpecItemContentItem>
                    <SpecItemContentItem>
                        <span>EPA Mi:</span> {range.epa.mi}
                    </SpecItemContentItem>
                </VersionMarginRight>
                <VersionNoMaring>
                    <SpecItemContentItem>
                        <span>WLTP Km:</span> {range.wltp.km}
                    </SpecItemContentItem>
                    <SpecItemContentItem>
                        <span>WLTP Mi:</span> {range.wltp.mi}
                    </SpecItemContentItem>
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem>
    )
}

export { SpecRange }