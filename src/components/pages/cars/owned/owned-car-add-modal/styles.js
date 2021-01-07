import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Roboto', sans-serif;

    ${props => props.display ? 'display: block;' : 'display: none;'}
`

const ModalContent = styled.div`
    position: fixed;
    background: #fff;
    width: 360px;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 7px;
    padding: 10px 6px 4px 10px;
    font-size: 22px;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    
    @media only screen and (max-width: 400px) {
        width: 300px;
    }

    @media only screen and (max-width: 300px) {
        width: 250px;
    }
`

const Header = styled.div`
    display: flex;
    font-weight: 500;
    flex-direction: row;
    justify-content: space-between;
`

const HeaderClose = styled.div`
    color: ${colors.error};
    font-size: 28px;
    height: 28px;
`

const LoadingWrapper = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
`

export { Wrapper, ModalContent, Header, HeaderClose, LoadingWrapper }
