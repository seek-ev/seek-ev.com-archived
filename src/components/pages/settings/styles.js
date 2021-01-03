import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 142px 10% 0px;
    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 92px 5% 0px;
    }
`

export { Wrapper }