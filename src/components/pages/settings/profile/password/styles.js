import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div``

const PasswordTitle = styled.div`
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
`

const Passwd = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px 2px 0;
    letter-spacing: 1px;
    font-weight: 600;
`

const PasswdIcon = styled.div`
    font-size: 20px;
    margin: -3px 6px 0;
`

const PasswordForm = styled.form``

const FormButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const FormButton = styled.div`
  margin: 0 0 0 6px;
`

const LoadingWrapper = styled.div`
    opacity: 0.6;
    background: #000;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
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

export { Wrapper, PasswordTitle, Passwd, PasswdIcon, PasswordForm, FormButtons, FormButton, Loading, LoadingWrapper }