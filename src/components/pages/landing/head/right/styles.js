import styled, { keyframes } from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    display: inline-block;
    margin: auto 8vw auto 0;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.medium}) and (orientation: portrait) {
        margin: 24px auto;
    }
`

const ShowIllu = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const Illustration = styled.img`
    opacity: 0;
    height: 500px;
    animation: 1s linear .5s ${ShowIllu};
    animation-fill-mode: forwards;

    @media only screen and (max-width: 1400px) {
        height: 400px;
    }

    @media only screen and (max-width: ${maxSize.desktop}) and (orientation: landscape) {
        height: 150px;
    }

    @media only screen and (max-width: 600px) and (orientation: landscape) {
        height: 100px;
    }

    @media only screen and (max-width: ${maxSize.medium}) and (orientation: portrait) {
        height: 300px;
    }

    @media only screen and (max-width: 450px) and (orientation: portrait) {
        height: 200px;
    }

    @media only screen and (max-width: 350px) and (orientation: portrait) {
        height: 150px;
    }
`

export { Wrapper, Illustration }