import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 124px 18% 24px;
    margin: 0 auto;

    @media only screen and (max-width: 1600px) {
        padding: 124px 9% 24px;
    }
    
    @media only screen and (max-width: ${maxSize.medium}) {
        align-items: center;
        padding: 94px 10% 24px;
    }

    @media only screen and (max-width: ${maxSize.small}) {
        padding: 94px 5% 24px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 30% 24px;
    }
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const HeaderDetails = styled.div`
    display: flex;
    margin: 0 0 0 12px;
    flex-direction: column;
    justify-content: center;
`

export { Wrapper, Header, HeaderDetails }