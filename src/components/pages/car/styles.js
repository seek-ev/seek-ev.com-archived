import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div``

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media only screen and (max-width: ${maxSize.large}) {
        flex-direction: column;
    }
`

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${maxSize.desktop}) {
        margin: 0 0 12px;
    }
    
    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

const Details = styled.div`
    width: 100%;
`

export { Wrapper, Header, HeaderInfo, Details }