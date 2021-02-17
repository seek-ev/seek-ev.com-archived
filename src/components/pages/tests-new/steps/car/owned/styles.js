import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div``

const Title = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 8px 0;
`

const OwnedList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

export { Wrapper, Title, OwnedList }