import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Section = styled.div`
    width: 100%;
    display: flex;
    padding: 0 20%;
    margin: 42px 0;
    flex-direction: ${props => props.direction};

    @media only screen and (max-width: ${maxSize.desktop}) {
        padding: 0 10%;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 0 5%;
        margin: 24px 0;
        flex-direction: column;
    }
`

const Illustration = styled.img`
    max-width: 250px;

    @media only screen and (max-width: ${maxSize.medium}) {
        max-width: 100%;
    }

    @media only screen and (max-width: ${maxSize.medium}) and (orientation: landscape) {
        max-width: 250px;
        margin: 0 auto;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Varela Round', sans-serif;
    margin: ${props => props.margin === 'left' ? '0 4px 0 64px' : '0 64px 0 4px'};

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 0 5%;
        margin: 16px 0;
    }
`

const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 24px 0 6px;
    font-family: 'Varela Round', sans-serif;
`

const Description = styled.div`
    font-size: 18px;
`

const TextLink = styled(Link)`
    margin: 6px 0 0;
    text-decoration: none;
    color: ${colors.primary};
`

export { Section, Illustration, Text, Title, Description, TextLink }