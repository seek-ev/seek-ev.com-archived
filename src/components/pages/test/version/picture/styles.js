import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    max-width: 300px;
    margin: 0 12px 0 0;
    border-radius: 7px;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        max-width: 100%;
        margin: 0 0 12px;
    }
`

const Picture = styled.img`
    width: 100%;
    border-radius: 7px;
    object-fit: contain;
`

export { Wrapper, Picture }