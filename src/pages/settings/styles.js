import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div``

const Header = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 12px 0 0;
        flex-direction: column;
    }
`

const Details = styled.div`
    display: flex;
    padding: 16px 0;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
`

export { Wrapper, Header, Details }