import React from 'react'

// Styles
import { Wrapper, Picture } from './styles'

const VersionPicture = ({ pictures }) => {
    return (
        <Wrapper>
            <Picture src={pictures.length > 0 ? pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="test_version_image" />
        </Wrapper>
    )
}

export { VersionPicture }