import styled from 'styled-components/macro'

// Variables
import { minSize, maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5% 12vh;
`

const HomeLink = styled(Link)`
    ${props => props.disabled ? 'pointer-events: none;' : ''}
`

const Logo = styled.img`
    width: 115px;

    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 90px; 
    }
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
    margin: 0 0 24px;
    text-align: center;
    
    @media only screen and (min-width: ${minSize.desktop}) {
        margin: 0 0 12px; 
    }
`

const Form = styled.div`
    width: 80%;

    @media only screen and (min-width: ${minSize.medium}) {
        width: 40%;
    }

    @media only screen and (min-width: ${minSize.desktop}) {
        width: 25%;
    }

    @media only screen and (min-width: ${minSize.large_desktop}) {
        width: 18%;
    }

    @media only screen and (orientation: landscape) and (max-width: ${maxSize.desktop}) {
        width: 40%;
    }
`

const SuccessTitle = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 24px;
    text-align: center;

    @media only screen and (min-width: ${minSize.desktop}) {
        margin: 0 0 12px;
    }
`

const SuccessTitleP = styled.p`
    font-size: 28px;
    font-weight: 500;
    margin: 8px 0 0px;
`

const SuccessLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
`

export { Wrapper, Container, HomeLink, Logo, Title, Form, SuccessTitle, SuccessTitleP, SuccessLink }