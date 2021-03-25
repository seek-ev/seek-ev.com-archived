import styled, { keyframes } from 'styled-components/macro'

const Wrapper = styled.div`
    margin: 0 24px;
    text-align: center;

    @media only screen and (max-width: 400px) {
        margin: 0 15px;
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
    width: 52px;
    animation: 1s 2.4s linear ${ShowLogo};
    animation-fill-mode: forwards;
    
    @media only screen and (max-width: 600px) and (orientation: landscape) {
      width: 34px;
    }

    @media only screen and (max-width: 400px) {
        width: 46px;
    }
`

export { Wrapper, Logo }