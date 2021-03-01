import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors, maxSize } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const NotFound = styled.div`
    display: flex;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    flex-direction:column;
    padding: 124px 10% 0px;
    color: ${colors.primary};

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 32px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }
`

const NotFoundLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    color: ${colors.primary};
`

const load1 = keyframes`
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
    -webkit-animation: ${load1} 1s infinite ease-in-out;
    animation: ${load1} 1s infinite ease-in-out;
    width: 7px;
    height: 20px;
    color: ${colors.primary};
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 8px;
    top: 100px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    &:before,
    &:after {
        background: ${colors.primary};
        -webkit-animation: ${load1} 1s infinite ease-in-out;
        animation: ${load1} 1s infinite ease-in-out;
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

export { Wrapper, NotFound, NotFoundLink, Loading }