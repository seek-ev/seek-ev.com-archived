import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const dissappear = keyframes`
    0% {
        opacity: 1;
        transform:  opacity 0.3s;
    }

    100% {
        opacity: 0;
        z-index: 0;
    }
`

const Wrapper = styled.div`
    width: 100vw;
    z-index: 100;
    height: 100vh;
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    justify-content: center;
    animation: ${dissappear} 0.3s 2.1s linear forwards;
`

const LogoAnimation = keyframes`
    0% {
        margin-left: 64px;
        transition: margin 0.2s;
    }

    50% {
        margin-left: 32px;
    }

    100% {
        margin: 0;
    }
`

const Logo = styled.img`
    width: 64px;
    margin-left: 64px;
    animation: ${LogoAnimation} 0.2s 0.5s linear forwards;
`

const BrandAnimation = keyframes`
    0% {
        opacity: 0;
        transition: opacity 0.3s;
    }

    100% {
        opacity: 1;
    }
`

const Brand = styled.div`
    opacity: 0;
    font-size: 30px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Exo', sans-serif;
    animation: ${BrandAnimation} 0.3s 0.9s linear forwards;
`

const Primary = styled.span`
    color: ${colors.primary};
`

export { Wrapper, Logo, Brand, Primary }