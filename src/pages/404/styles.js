import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    
    a {
        color: ${colors.primary};
        font-weight: 500;
        margin: 6px 0;
        text-decoration: none;
    } 
     
    code {
        color: ${colors.primary};
        margin: 0px 1px;
    }
`

const Title = styled.div`
    font-size: 32px;
    font-weight: 500;
    margin: 0 0 6px;
`

export { Wrapper, Title }