import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    margin: 4px 0 0;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: ${maxSize.desktop}) {
        margin: 8px 0 0
    }
`
const FormButton = styled.div`
    margin: 0 8px 0;
`

const LoginInput = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 0 2px;
`

export { Form, Buttons, FormButton, LoginInput }