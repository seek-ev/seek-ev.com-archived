import styled, { keyframes } from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    text-align: left;

    @media only screen and (max-width: ${maxSize.medium}) {
       text-align: center;
    }
`

const ShowLogo = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const Logo = styled.img`
    opacity: 0;
    width: 94px;
    animation: 1s linear .5s ${ShowLogo};
    animation-fill-mode: forwards;

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 84px;
    }

    
    @media only screen and (max-width: 600px) and (orientation: landscape) {
      width: 54px;
    }

    @media only screen and (max-width: 400px) {
        width: 64px;
    }
`

export { Wrapper, Logo }