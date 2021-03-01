import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

export { Wrapper }