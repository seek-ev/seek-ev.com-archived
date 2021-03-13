import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    select {
        max-width: 180px;
    }

    button {
        width: 120px;
        align-self: flex-end;
    }
`

const Title = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 12px 0px 8px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const LoadingWrapper = styled.div`
    opacity: 0.6;
    background: #000;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Load = keyframes`
    0%, 80%, 100% {
        box-shadow: 0 0;
        height: 4em;
    }
    40% {
        box-shadow: 0 -2em;
        height: 5em;
    }
`

const Loading = styled.div`
    background: ${colors.primary};
    animation: ${Load} 1s infinite ease-in-out;
    width: 7px;
    height: 20px;
    color: ${colors.primary};
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 8px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    &:before,
    &:after {
        background: ${colors.primary};
        animation: ${Load} 1s infinite ease-in-out;
        width: 7px;
        height: 20px;
    }

    &:before,
    &:after {
        position: absolute;
        top: 0;
        content: '';
    }
    
    &:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    &:after {
        left: 1.5em;
    }
`

export { Wrapper, Title, Buttons, LoadingWrapper, Loading }