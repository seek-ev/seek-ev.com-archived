import styled from 'styled-components/macro'

// Styles
import { maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const Container = styled.div`
    padding: 112px 5% 24px;

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 84px 5% 24px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 112px 25% 24px; 
    }
`

const Unauthorized = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;

    code {
        color: ${colors.primary};
        margin: 0px 1px;
    }
`

const UnauthorizedTitle = styled.div`
    font-size: 32px;
    font-weight: 500;
    margin: 0 0 6px;
`

const UnauthorizedLink = styled(Link)`
    margin: 4px 0 0;
    color: ${colors.primary};
    font-weight: 500;
    border-bottom: 2px solid #fff;
    text-decoration: none;
    
    :hover {
        border-bottom: 2px solid ${colors.primary};
    }
`

const NotFound = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 6px;
    code {
        color: ${colors.primary};
        margin: 0px 1px;
    }
`

const NotFoundLink = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    border-bottom: 2px solid #fff;
    text-decoration: none;
    
    :hover {
        border-bottom: 2px solid ${colors.primary};
    }
`

const Loading = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    top: 40%;
    left: 50%;
    margin: 8px;
    border: 4px solid ${colors.primary};
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.primary} transparent transparent transparent;

    @keyframes loading-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Processing = styled.div`
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    z-index: 12;
    border-radius: 7px;
    background-color: rgba(0,0,0, .30);
    transform: translate(-50%,-50%);
`

const ProcessingLoading = styled.div`
    z-index: 2;
    color: ${colors.primary};
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

export { Wrapper, Container, Unauthorized, UnauthorizedTitle, UnauthorizedLink, NotFound, NotFoundLink, Loading, Processing, ProcessingLoading }