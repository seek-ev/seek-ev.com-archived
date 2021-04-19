import styled, { keyframes } from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Icons
import { BsArrowDown } from 'react-icons/bs'

const Wrapper = styled.div`
    height: 100vh;
    max-height: 100vh;

    @media only screen and (max-width: ${maxSize.medium}) {
        height: 100vh;      
    }

    @media only screen and (max-width: 900px) and (orientation: landscape) {
        height: 120vh;
        max-height: 120vh;  
    }
`

const Row = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: ${maxSize.desktop}) {
        flex-direction: column;        
    }
`

const Show = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const Bounce = keyframes`
    0% { transform: translateY(20%); }
    50% { transform: translateY(-20%); }
`

const Bottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const Text = styled.span`
    opacity: 0;
    font-size: 18px;
    font-weight: 500;
    transform: translateY(-50%);
    font-family: 'Exo', sans-serif;
    animation: 1s 2.4s linear ${Show} forwards;
`

const SlideIcon = styled(BsArrowDown)`
    opacity: 0;
    color: #080808;
    font-size: 3rem;
    transform: translateY(20%);
    animation: 1s 2.4s linear ${Show} forwards, 2s infinite ${Bounce};
`

export { Wrapper, Row, Bottom, Text, SlideIcon }