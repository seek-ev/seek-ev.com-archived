import styled, { keyframes } from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    z-index: 1;
    text-align: center;
    margin: 0 0 0 48px;
    font-family: 'Comfortaa', cursive;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 16px 0 4px;
    }
`

const Show = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const Title = styled.div`
    opacity: 0;
    font-size: 42px;
    font-weight: 600;
    animation: 0.9s 2.4s 1 ${Show} forwards;

    @media only screen and (max-width: ${maxSize.medium}) {
        font-size: 38px;
    }

    @media only screen and (max-width: 600px) and (orientation: landscape) {
        font-size: 24px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 28px;
        margin: 0 12px;
    }
`

const Description = styled.div`
    opacity: 0;
    font-size: 18px;
    text-align: left;
    animation: 0.9s 2.4s 1 ${Show} forwards;

    @media only screen and (max-width: ${maxSize.medium}) {
       text-align: center;
       padding: 0 18px;
    }
`

export { Wrapper, Title, Description }