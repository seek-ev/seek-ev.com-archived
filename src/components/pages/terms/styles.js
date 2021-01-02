import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    padding: 78px 25% 0;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    
    @media only screen and (max-width: ${maxSize.large}) {
        padding: 48px 20% 0;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 32px 16px 0;
    }
`

const Note = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin: 32px 0;
`

export { Wrapper, Note }