import styled, { keyframes } from 'styled-components/macro'

const Wrapper = styled.div`
    display: flex;
    display: inline-block;
    margin: auto 8vw auto 0;
    flex-direction: row;
    justify-content: space-between;
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
`

export { Wrapper, Illustration }