import styled from 'styled-components/macro'


// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Roboto', sans-serif;

    ${props => props.show ? 'display: block;' : 'display: none;'}
`

const ModalContent = styled.div`
    position: fixed;
    background: #fff;
    width: 350px;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 7px;
    padding: 10px 6px 0px 12px;
    font-size: 22px;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
`

const Header = styled.div``

const Buttons = styled.div`
    display: flex;
    margin: 8px 0 0;
    justify-content: flex-end;

    button {
        margin: 0 0 6px;
    }
`

const ButtonMl = styled.div`
    margin: 0 0 0 6px;
`

const LoadingWrapper = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
`

const Loading = styled.div`
    background: ${colors.primary};
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
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
        left: 1.5em;
    }

    @-webkit-keyframes load1 {
        0%, 80%, 100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }

    @keyframes load1 {
        0%, 80%, 100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }
`

export { Wrapper, ModalContent, Header, Buttons, ButtonMl, LoadingWrapper, Loading }