import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
`

const NoTests = styled.div`
    width: 100%;
    text-align: center;
    margin: 4px 0 0;
    font-size: 17px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 8px 0;
    }
`

export { Wrapper, NoTests }