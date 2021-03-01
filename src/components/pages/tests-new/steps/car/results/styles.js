import styled, { keyframes } from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

// Icons
import { MdInfo } from 'react-icons/md'

const Wrapper = styled.div``

const Title = styled.p`
    margin: 8px 0;
    display: flex;
    font-size: 22px;
    font-weight: 500;
    align-items: center;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    position:relative;

    :before {
        content: attr(data-text); 
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        margin-left: 7px; 
        width: 200px;
        padding: 10px;
        font-size: 12px;
        border-radius: 10px;
        background: #000;
        color: #fff;
        text-align: center;
        display: none;
    }

    :hover:before {
        display:block;
    }
`

const InfoIcon = styled(MdInfo)`
    margin: 0 0 0 4px;
    :hover {
        color: ${colors.primary};
    }
`

const SearchInput = styled.div`
    max-width: 250px;
`

const ResultsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
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

export { Wrapper, Title, SearchInput, ResultsList, Loading, Bounce, Info, InfoIcon }