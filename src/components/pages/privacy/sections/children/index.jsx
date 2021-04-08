import React from 'react'

// Styles
import { Wrapper, Title, Content } from '../styles'

const Children = () => {
    return (
        <Wrapper>
            <Title>Children</Title>
            <Content>
                Our Services are for users age 13 and over and we do not knowingly collect personal information from children under the age of 13.
                If you are a parent or guardian of a child under the age of 13 and believe he or she has disclosed personal information to us please contact
                us through our <a href="https://discord.gg/GQ4ddQM">discord server</a>.
                Note: In some countries, the age of digital consent is older than 13. If you are in those countries,
                you must be at least that age to use the Services.
                For example, for residents of the EEA, where processing of personal information is based on consent,
                Seek EV will not knowingly engage in that processing for users under the age of consent established by applicable data protection law.
                If we learn that we are engaged in that processing with such users,
                we will halt such processing and will take reasonable measures to promptly remove applicable information from our records.
            </Content>
        </Wrapper>
    )
}

export { Children }