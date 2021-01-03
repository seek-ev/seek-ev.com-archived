import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Connections = styled.div`
    padding: 0 64px 0;
    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 0;
    }
`

const ConnectionsTitle = styled.div`
    font-size: 22px;
    margin: 0 0 2px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
`

const List = styled.div`
    display: flex;
    padding: 4px 0 0;
    flex-direction: column;
    @media only screen and (max-width: ${maxSize.medium}) {
        align-items: center;
        justify-content: center;
    }
`

const Create = styled.div`
    display: flex;
    margin: 2px 0;
    flex-direction: column;
`

const CreateTitle = styled.div``

const ConnectButton = styled.a`
    width: 140px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${colors.dark};
    padding: 4px 0px;
    margin: 2px 0;
    font-weight: 500;
    font-size: 17px;
    border-radius: 7px;
    background-color: $primary;
    font-family: 'Roboto', sans-serif;

    ${props => props.type === 'discord' ? 'background-color: #7289DA;' : ''}

    ${props => props.type === 'patreon' ? 'background-color: #F96854;' : ''}
`

const ConnectIcon = styled.div`
    margin: 4px 6px 0;
    font-size: 14px;
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

export { Connections, ConnectionsTitle, List, Create, CreateTitle, ConnectButton, ConnectIcon, LoadingWrapper, Loading }