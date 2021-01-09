import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Container = styled.div``

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: width;
    align-items: flex-start;
    padding: 124px 10% 0px;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 32px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }
`

const UserCars = styled.div`
    margin: 0 12px 0 0;
    width: 50%;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 0;
        width: 100%;
    }
`

const Header = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 6px;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
`

const NewButton = styled.div`
    width: auto;
    margin: 4px 0;
    text-align: right;

`

const Owned = styled.div`
    margin: 0 0 0 12px;
    width: 50%;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 12px 0 0;
        width: 100%;
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
    top: 100px;
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

export { Container, Wrapper, UserCars, Header, Title, NewButton, Owned, Loading }