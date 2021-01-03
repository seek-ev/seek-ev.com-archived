import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Roboto', sans-serif;

    &-main {
    
    }

    ${props => props.show ? 'display: block;' : 'display: none;'}
`

const ModalContent = styled.div`
    position: fixed;
    background: #fff;
    width: 250px;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 7px;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4px 4px 4px 8px;
`

const HeaderTitle = styled.div`
    font-weight: 500;
    padding: 2px 0;
    font-size: 20px;
`

const Close = styled.div`
    font-size: 28px;
    color: ${colors.error};

    ${props => props.disabled ? 'pointer-events: none' : ''}
`

const AvatarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Avatar = styled.div`
    width: 128px;
    height: 128px;
    display: block;
    backface-visibility: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;   
    }

    ${props => props.opacity ? `
        img { opacity: 0.7; }
    ` : ''}
`

const ModalButton = styled.div`
    width: 100%;
    text-align: right;
    padding: 6px 8px 0;
    
    button {
        margin: 0 0 6px 0;
    }
`

const Loading = styled.div`
    z-index: 12;
    background: ${colors.primary};
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 7px;
    height: 20px;
    color: ${colors.primary};
    text-indent: -9999em;
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

export { Modal, ModalContent, Header, HeaderTitle, Close, AvatarContent, Avatar, ModalButton, Loading }