import React from 'react'

// Styles
import { Wrapper, Title, Content } from '../styles'

const Communications = () => {
    return (
        <Wrapper>
            <Title>Communications</Title>
            <Content>
                You agree to receive communications from us electronically,
                such as email notices. <br /><br />

                By using the Service or providing information to us,
                you agree that we may communicate with you electronically regarding security,
                privacy, and administrative issues relating to your use of the Service,
                and that all agreements, notices, disclosures,
                and other communications that Seek EV provides to you electronically satisfy
                any legal requirements that such communications be in writing.
            </Content>
        </Wrapper>
    )
}

export { Communications }