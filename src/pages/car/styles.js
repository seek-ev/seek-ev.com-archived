import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const Car = styled.div`
    padding: 94px 5% 24px;

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 72px 5% 24px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 94px 25% 24px;
    }
`

const CarNotFound = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 6px;
`

const CarNotFoundLink = styled.div`
    margin: 2px 0;
`

const CarNotFoundButton = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    border-bottom: 2px solid #fff;
    text-decoration: none;

    :hover {
        border-bottom: 2px solid ${colors.primary};
    }
`

const CarNotFoundTitle = styled.div`
    font-size: 38px;
    margin: 0 0 12px;
`

const Loading = styled.div`
    background: ${colors.primary};
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 7px;
    top: 10vh;
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

export { Wrapper, Car, CarNotFound, CarNotFoundLink, CarNotFoundButton, CarNotFoundTitle, Loading }