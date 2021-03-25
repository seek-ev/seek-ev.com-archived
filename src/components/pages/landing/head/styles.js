import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    height: 100vh;
`

const Row = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: ${maxSize.desktop}) {
        flex-direction: column;        
    }
`

export { Wrapper, Row }