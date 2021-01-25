import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Top = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.medium}) and (orientation: portrait) {
        flex-direction: column;
        justify-content: center;
    }
`

export { Wrapper, Top }