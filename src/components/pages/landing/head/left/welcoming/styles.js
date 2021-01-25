import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors, maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: 'Comfortaa', cursive;

    @media only screen and (max-width: ${maxSize.medium}) {
        align-items: center;
    }
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
    animation: 0.9s 0.3s 1 ${ShowTitle};
    animation-fill-mode: forwards;

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

const SubTitle = styled.div`
    opacity: 0;
    margin: 2px 0 0 6px;
    font-size: 24px;
    font-weight: 300;
    color: ${colors.primary};
    animation: 0.6s 0.3s 1 ${ShowDesc};
    animation-fill-mode: forwards;

    @media only screen and (max-width: ${maxSize.medium}) {
        font-size: 20px;
    }

    @media only screen and (max-width: 600px) and (orientation: landscape) {
        font-size: 14px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 16px;
    }
`

export { Wrapper, Title, SubTitle }