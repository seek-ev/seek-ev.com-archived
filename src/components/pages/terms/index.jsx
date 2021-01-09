import React from 'react'

// Styles
import { Wrapper, Note } from './styles'

// Components
import { TermsHeader } from 'components/pages/terms/header'

const Terms = () => {
    return (
        <Wrapper>
            <TermsHeader />
            <Note>
                Terms under preparation
            </Note>
        </Wrapper>
    )
}

export { Terms }