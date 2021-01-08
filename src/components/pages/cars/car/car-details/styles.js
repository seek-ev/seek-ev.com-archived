import styled from 'styled-components/macro'

// Assets
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media only screen and (max-width: ${maxSize.medium}) {
        align-items: center;
        justify-content: center;
    }
`

const Verified = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 24px;
    font-weight: 500;

    @media only screen and (max-width: ${maxSize.medium}) {
        justify-content: center; 
    }

    ${props => props.verified ? `color: ${colors.primary};` : `color: ${colors.error};`}
`

const VerifiedIcon = styled.div`
    margin: 2px 0 0 4px;
`

const RemoveButton = styled.div`
    margin: 6px 0 0;
`

const Modal = styled.div`
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
    width: 300px;
    padding: 12px 12px 6px 10px;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 7px;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
`

const ModalText = styled.div`
    font-size: 18px;
    font-weight: 500;
`

const ModalButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    button { 
        margin: 6px 0 6px 8px; 
    }
`

export { Wrapper, Verified, VerifiedIcon, RemoveButton, Modal, ModalContent, ModalText, ModalButtons }