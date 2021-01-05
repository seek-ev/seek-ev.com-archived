import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormButton = styled.div`
    margin: 2px 8px 0;
`

const FormText = styled.div`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    margin: 0 0 4px;
`

const FormLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;

    ${props => props.disabled ? `
        color: #808080;
        pointer-events: none;
    ` : ''}
`

const FormInput = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 0 2px;
`

export { Form, FormButton, FormText, FormInput, FormLink }