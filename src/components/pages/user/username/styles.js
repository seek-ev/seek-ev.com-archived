import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    font-size: 22px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        font-size: 28px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 24px;
    }
`

export { Wrapper }