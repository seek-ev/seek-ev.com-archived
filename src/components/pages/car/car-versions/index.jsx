import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Versions, Title, VersionSelect, VersionButton, Item, None } from './styles'

// Components
import { CarVersion } from './version'

const CarVersions = (props) => {
    const [versions, setVersions] = useState([])
    const [version, setVersion] = useState(0)

    useEffect(() => {
        if (props.versions && props.versions.length > 0) setVersions(props.versions)
        else if (props.versions) setVersions([])
    }, [props.versions])

    return (
        <Wrapper>
            <Versions>
                {versions.length === 1 ? '' : <Title>Choose version</Title>}
                {versions.length === 1 ? '' : <VersionSelect>
                    {versions.map((v, index) => {
                        return <VersionButton chosen={version === index} key={v.id} onClick={() => setVersion(index)}>{v.name}</VersionButton>
                    })}
                </VersionSelect>}

                <Item>
                    <CarVersion version={versions[version]} />
                </Item>
            </Versions>

            {
                versions.length === 0 ? <None>
                    We don't have any details about this car {props.year ? `from ${props.year}` : ''}
                </None>
                    : ''
            }
        </Wrapper >
    )
}

export { CarVersions }