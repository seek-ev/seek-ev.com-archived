import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    padding: 12px 0;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

const TInput = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin: 0 7px 0 0;
`

export { Wrapper, TInput }