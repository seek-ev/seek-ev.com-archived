import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Header = styled.div``

const Title = styled.div`
    font-size: 42px;
    font-weight: 500;
    font-family: 'Varela Round', sans-serif;

    @media only screen and (max-width: ${maxSize.medium}) {
        font-size: 36px;
    }
`

const Date = styled.div`
    font-size: 18px;
    font-weight: 300;
    margin: 4px 0 0;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        font-size: 17px;
    }
`

export { Header, Title, Date }