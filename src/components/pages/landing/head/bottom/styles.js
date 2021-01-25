import styled, { keyframes } from 'styled-components/macro'

// Icons
import { BsArrowDown } from 'react-icons/bs'

const Wrapper = styled.div`
    height: 10vh;
    width: 100vw;
    padding: 24px 0 0;
    text-align: center;
`

const Appear = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const ArrowJump = keyframes`
  0%   {transform: translate3d(0,0,0);}
  50% {transform: translate3d(0,20px,0);}
  100% {transform: translate3d(0,0,0);}
`

const Arrow = styled(BsArrowDown)`
    bottom: 0;
    opacity: 0;
    font-size: 48px;
    animation: 1s ${Appear} .5s forwards, ${ArrowJump} 1.4s infinite;
`

export { Wrapper, Arrow }