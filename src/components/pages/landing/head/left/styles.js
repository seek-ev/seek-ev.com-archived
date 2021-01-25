import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 0 0 0 24px;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: ${maxSize.medium}) and (orientation: portrait) {
        padding: 0;
        height: auto;
        justify-content: flex-start;
    }

    @media only screen and (max-width: 400px) {
        padding: 12px 0 0;
    }
`

export { Wrapper }