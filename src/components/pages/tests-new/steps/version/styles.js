import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 8px 0;
`

const NoTimeline = styled.div`
    margin: 4px 0 8px;
`

const Buttons = styled.div`
    button {
        margin: 6px 8px 0 0;
    }
`


const Loading = styled.div`
    margin: 14px auto;
    width: 100px;
    text-align: center;
`

const BounceDelay = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`

const Bounce = styled.div`
    width: 14px;
    height: 14px;
    background-color: ${colors.primary};
    border-radius: 100%;
    margin: 0 6px;
    display: inline-block;
    animation: ${BounceDelay} 1.4s infinite ease-in-out both;
    animation-delay: 0s;
    ${props => props.one ? `
        animation-delay: -0.32s;
    ` : ''}

    ${props => props.two ? `
         animation-delay: -0.16s;
    ` : ''}
`

export { Wrapper, Title, NoTimeline, Buttons, Loading, Bounce }