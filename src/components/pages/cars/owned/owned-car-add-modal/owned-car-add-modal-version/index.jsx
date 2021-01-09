import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, VersionButton } from './styles'

// Components
import { Select } from 'components/basic/select'
import { Button } from 'components/basic/button'

const OwnedCarAddModalVersion = (props) => {
    const [versions, setVersions] = useState([])
    const [version, setVersion] = useState(null)

    const onVersionChange = async (e) => {
        const found = await versions.find(v => v.id === parseInt(e.value))
        await setVersion(found)
    }

    const add = () => {
        props.add(version.id)
    }

    useEffect(() => {
        if (!props.versions) return
        setVersions(props.versions)
        setVersion(props.versions[0])
    }, [props.versions])

    return (
        <Wrapper>
            <Select name='owned-version' options={versions} onChange={onVersionChange} />
            <VersionButton>
                <Button text="Add" primary disabled={!version} onClick={add} />
            </VersionButton>
        </Wrapper>
    )
}

export { OwnedCarAddModalVersion }