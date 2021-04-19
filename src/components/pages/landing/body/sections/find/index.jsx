import React from 'react'

// Styles
import { Section, Illustration, Text, Title, Description, TextLink } from '../styles.js'

const FindSection = () => {
    return (
        <Section direction="row">
            <Illustration src="/ln/undraw_ttge.svg" alt="illustration_find_car" />
            <Text margin="left">
                <Title>Find right car for you!</Title>
                <Description>
                    It's not that easy to find a right car for yourself these days. We make it easy for you! Just provide basic details like, for example how much you drive daily and we will help you find the right one.
                </Description>
                <TextLink to="/match-car">Try now</TextLink>
            </Text>
        </Section>
    )
}

export { FindSection }