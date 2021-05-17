import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.loading};
`

const loadingRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
    margin: 0 0 6px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 48px;
        height: 48px;
        margin: 8px;
        border: 4px solid ${colors.primary};
        border-radius: 50%;
        animation: ${loadingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${colors.primary} transparent transparent transparent;
        &:nth-child(1) {
            animation-delay: -0.45s;
        }
        &:nth-child(2) {
            animation-delay: -0.3s;
        }
        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`

const NotFound = styled.div`
    margin: 8px 0 0;
    font-weight: 500;

    span {
        color: ${colors.primary};
    }
`

export { Wrapper, Loading, NotFound }