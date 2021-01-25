import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const ShowTitle = keyframes`
    0% {
        transform: translate3d(-50px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        visibility: visible;
        opacity: 0;
    }

    100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 1;
    }
`

const ShowDesc = keyframes`
    0% {
        transform: translate3d(-50px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 0;
    }

    100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 1;
    }
`

const Title = styled.div`
    opacity: 0;
    font-size: 42px;
    font-weight: 600;
    font-family: 'Comfortaa', cursive;
    animation: 0.9s 0.3s 1 ${ShowTitle};
    animation-fill-mode: forwards;
`

const SubTitle = styled.div`
    opacity: 0;
    margin: 2px 0 0 6px;
    font-size: 24px;
    font-weight: 300;
    color: ${colors.primary};
    font-family: 'Comfortaa', cursive;
    animation: 0.6s 0.3s 1 ${ShowDesc};
    animation-fill-mode: forwards;
`

export { Wrapper, Title, SubTitle }