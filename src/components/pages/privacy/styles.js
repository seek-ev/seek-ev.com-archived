import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div`
    padding: 78px 25% 24px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    
    @media only screen and (max-width: ${maxSize.large}) {
        padding: 48px 20% 24px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 32px 16px 24px;
    }
`

const Note = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin: 32px 0;

    span {
        text-decoration: underline;
    }

    a { 
        text-decoration: none;
        color: ${colors.primary};
    }
`

export { Wrapper, Note }