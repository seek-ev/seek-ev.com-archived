import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.desktop}) {
        flex-direction: column; 
    }
`

const HeaderLeft = styled.div`
    width: 40%;

    @media only screen and (max-width: $max-desktop) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

const HeaderRight = styled.div`
    width: 60%;
    
    @media only screen and (min-width: $min-desktop) and (max-width: 1600px) {
        margin: 0 0 0 46px;
    }

    @media only screen and (max-width: $max-desktop) {
        width: 100%;
        padding: 24px 0 0;
    }
`

export { Wrapper, HeaderLeft, HeaderRight }