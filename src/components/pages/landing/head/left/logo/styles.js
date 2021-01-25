import styled, { keyframes } from 'styled-components/macro'

const Wrapper = styled.div`
    text-align: left;
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
    width: 124px;
    animation: 1s linear .5s ${ShowLogo};
    animation-fill-mode: forwards;
`

export { Wrapper, Logo }