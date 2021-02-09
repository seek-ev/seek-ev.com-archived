import styled, { keyframes } from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    margin: 0 56px;
    text-align: center;

    @media only screen and (max-width: 400px) {
        margin: 0 30px;
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
    width: 64px;
    animation: 1s linear .5s ${ShowLogo};
    animation-fill-mode: forwards;

    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 56px;
    }
    
    @media only screen and (max-width: 600px) and (orientation: landscape) {
      width: 34px;
    }

    @media only screen and (max-width: 400px) {
        width: 46px;
    }
`

export { Wrapper, Logo }