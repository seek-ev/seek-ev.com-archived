import styled from 'styled-components/macro'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const FormButton = styled.div`
    margin: 0 8px 0;
`

const FormInput = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 0 2px;
`

export { Form, FormButtons, FormButton, FormInput }