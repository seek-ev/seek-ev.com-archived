import styled from 'styled-components/macro'


// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    ${props => props.show ? 'display: block;' : 'display: none;'}
`

const ModalContent = styled.div`
    position: fixed;
    background: #fff;
    width: 320px;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 7px;
    padding: 10px 12px 0px;
    font-size: 22px;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
`

const Header = styled.div``

const Buttons = styled.div``

const ButtonMl = styled.div`
    margin: 0 0 0 6px;
`

const LoadingWrapper = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
`

const Loading = styled.div`
    z-index: 12;
    color: $primary;
    text-indent: -9999em;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 0;
    top: 45%;
    font-size: 8px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    :before,
    :after {
        background: ${colors.primary};
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
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
        left: 1.5em
    }

    @-webkit-keyframes load1 {
        0%,    80%,    100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }

    @keyframes load1 {
        0%,  80%, 100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }

    ${props => props.opacity ? 'opacity: 0.7;' : ''}

    ${props => props.disabled ? 'pointer-events: none;' : ''}
`

export { Wrapper, ModalContent, Header, Buttons, ButtonMl, LoadingWrapper, Loading }