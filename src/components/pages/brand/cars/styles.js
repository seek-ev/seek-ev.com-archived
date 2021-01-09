import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 0 5%;
    }
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`

export { Wrapper, Title, List }