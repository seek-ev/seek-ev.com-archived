import styled from 'styled-components/macro'

// Variables
import { minSize, maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5% 12vh;
`

const PageLink = styled(Link)``

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

const ForgotButton = styled.div`
    margin: 0 0 0 3px;
    color: ${colors.primary};
    text-decoration: none;
`

const ResetLink = styled(Link)`
    color: #080808;
    text-decoration: none;

    :hover {
        color: ${colors.primary}
    }
    
    ${props => props.disabled ? 'pointer-events: none;' : ''}
`

export { Wrapper, PageLink, Logo, Title, Form, ForgotButton, ResetLink }