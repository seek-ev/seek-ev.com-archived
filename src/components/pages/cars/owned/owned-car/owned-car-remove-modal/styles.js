import styled from 'styled-components/macro'


const Wrapper = styled.div`
    ${props => props.show ? 'display: block;' : 'display: none;'}
`

const ModalContent = styled.div`
    position: fixed;
    background: #fff;
    width: 320px;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 7px;
    padding: 10px 12px 0px;
    font-size: 22px;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
`

const Header = styled.div``

const Buttons = styled.div``

const ButtonMl = styled.div`
    margin: 0 0 0 6px;
`

const LoadingWrapper = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
`

export { Wrapper, ModalContent, Header, Buttons, ButtonMl, LoadingWrapper }