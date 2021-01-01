import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div``

const Cars = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px 4% 18px;
    justify-content: flex-start;

    @media only screen and (max-width: ${maxSize.large}) and (orientation: landscape) {
        flex-wrap: wrap;
        flex-direction: row !important;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        align-content: center;
        padding: 12px 5% 18px;
    }
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

const NotFound = styled.div`
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px 0;
    .not-found-icon {
        color: ${colors.primary};
        margin: 2px 0 0;
    }
`

export { Wrapper, Cars, Loading, NotFound }