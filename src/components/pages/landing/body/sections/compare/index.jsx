import React from 'react'

// Styles
import { Section, Illustration, Text, Title, Description } from '../styles.js'

const CompareSection = () => {
    return (
        <Section direction="row">
            <Illustration src="/ln/undraw_80ws.svg" alt="illustration_compare_data" />
            <Text margin="left">
                <Title>Compare real life data</Title>
                <Description>
                    Our users provide useful data to compare how car behaves in different situations like weather, temperature, load, speed and surface. So now you can be sure that this car which you will choose is going to be safe!
                </Description>
            </Text>
        </Section>
    )
}

export { CompareSection }