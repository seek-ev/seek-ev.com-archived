import React from 'react'

// Styles
import { Section, Illustration, Text, Title, Description, TextLink } from '../styles.js'

const DataSection = () => {
    return (
        <Section direction="row-reverse">
            <Illustration src="/ln/undraw_h7l9.svg" alt="illustration_browse_data" />
            <Text margin="right">
                <Title>Browse cars details</Title>
                <Description>
                    Browse cars details like range, power, number of seats, cargo space and more! Thanks to those details it will be able easier for you to decide whether this car fits you or not ;)
                </Description>
                <TextLink to="/home">Browse now!</TextLink>
            </Text>
        </Section>
    )
}

export { DataSection }