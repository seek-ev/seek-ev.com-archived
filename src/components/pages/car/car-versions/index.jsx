import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Versions, Title, VersionSelect, VersionButton, Item, None } from './styles'

// Components
import { CarVersion } from './version'

const CarVersions = (props) => {
    const [versions, setVersions] = useState([])
    const [version, setVersion] = useState(null)

    useEffect(() => {
        if (props.version) {
            const foundVersion = props.versions.find(v => v.name === props.version)
            if (foundVersion) setVersion(foundVersion)
            else setVersion(props.versions[0])
        } else setVersion(props.versions[0])

        if (props.versions && props.versions.length > 0) setVersions(props.versions)
        else if (props.versions) setVersions([])
    }, [props.versions, props.version])

    return (
        <Wrapper>
            {versions.length > 0 ?
                <Versions>
                    <Title>Choose version</Title>
                    <VersionSelect>
                        {versions.map((v, index) => {
                            return <VersionButton chosen={version.name === v.name} key={v.name} onClick={() => setVersion(v)}>{v.name}</VersionButton>
                        })}
                    </VersionSelect>

                    <Item>
                        <CarVersion version={version} />
                    </Item>
                </Versions> :
                <None>
                    We don't have any details about this car {props.year ? `from ${props.year}` : ''}
                </None>}
        </Wrapper>
    )
}

export { CarVersions }