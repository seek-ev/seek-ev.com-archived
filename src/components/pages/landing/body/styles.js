import styled, { keyframes } from 'styled-components/macro'

const Show = keyframes`
    0% {
        height: 0px;
    }

    100% {
        height: auto;
        min-height: 100vh;
    }
`


const Wrapper = styled.div`
    height: 0px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-around;
    animation: ${Show} 0s 2.4s linear forwards;
`

export { Wrapper }