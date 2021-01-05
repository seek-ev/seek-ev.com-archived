import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div``

const Form = styled.div`
    width: 400px;
    height: 500px;
    background-color: #fff;
    position: fixed;
    bottom: 9%;
    right: 1.2%;
    z-index: 10;
    border-radius: 7px;
    padding: 12px 14px;
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    @media only screen and (max-width: 400px) {
        bottom: 13%;
        right: 4%;
        width: 90%;
        height: 450px;
    }

    @media only screen and (max-width: 1250px) and (orientation: landscape) {
        width: 60%;
        height: 300px;
        bottom: 15%;
        right: 2%;
    }

    @media only screen and (max-width: 600px) and (orientation: landscape) {
        width: 80%;
        height: 200px;
        bottom: 22%;
        right: 3%;
    }
`

const FormContent = styled.div``

const FormHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const FormTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
`

const FormClose = styled.div`
    color: ${colors.error};
    font-size: 28px;
    height: 28px;
`

const FormTextbox = styled.div`
    width: 370px;
    height: 410px;
    margin: 2px 0 0;
    padding: 6px 0;
    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        padding: 12px;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        border-radius: 7px;
        font-family: 'Roboto', sans-serif;
        box-shadow: inset 0px 0px 6px 2px rgba(0,0,0,0.07);
        -moz-box-shadow: inset 0px 0px 6px 2px rgba(0,0,0,0.07);
        -webkit-box-shadow: inset 0px 0px 6px 2px rgba(0,0,0,0.07);
    }

    @media only screen and (max-width: 400px) {
        height: 330px;
    }
    
    @media only screen and (max-width: 1250px) and (orientation: landscape) {
        height: 210px;
        width: 100%;
    }

    @media only screen and (max-width: 600px) and (orientation: landscape) {
        height: 110px;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 4px 0;
    justify-content: flex-end;
`

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Loading = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 4px solid ${colors.primary};
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.primary} transparent transparent transparent;

    @keyframes loading-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
    }
}
`

export { Wrapper, Form, FormContent, FormHead, FormTitle, FormClose, FormTextbox, Footer, LoadingWrapper, Loading }