import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Container = styled.div``

const Wrapper = styled.div`
        display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 10% 0px;

    @media only screen and (max-width: 1500px) {
        padding: 124px 8% 0px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 32px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }
`

const Submit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 24px 0 0;
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

    ${props => props.top ? 'top: 30%;' : 'top: 100px;'}
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


export { Container, Wrapper, Submit, Loading, Processing }