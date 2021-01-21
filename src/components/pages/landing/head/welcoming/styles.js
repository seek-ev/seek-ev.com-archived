import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ShowTitle = keyframes`
    0% {
        transform: translate3d(0px, -50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 0;
    }

    100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 1;
        visibility: visible;
    }
`

const ShowDesc = keyframes`
    0% {
        transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 0;
    }

    100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 1;
        visibility: visible;
    }
`

const Title = styled.div`
    font-size: 32px;
    animation-fill-mode: forwards;
    font-family: 'Varela', sans-serif;
    animation: 0.9s 0.3s 1 ${ShowTitle};
`

const SubTitle = styled.div`
    margin: 2px 0 0;
    font-size: 18px;
    color: ${colors.primary};
    animation-fill-mode: forwards;
    animation: 0.6s 0.3s 1 ${ShowDesc};
    font-family: 'Varela', sans-serif;
`

export { Wrapper, Title, SubTitle }