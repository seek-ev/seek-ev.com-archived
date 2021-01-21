import styled, { keyframes } from 'styled-components/macro'

const Wrapper = styled.div`
    text-align: center;
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
`

export { Wrapper, Logo }