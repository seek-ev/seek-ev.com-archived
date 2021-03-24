import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Icons
import { MdOpenInNew } from 'react-icons/md'

const Wrapper = styled.div`
    display: flex;
    font-size: 22px;
    font-weight: 500;
    flex-direction: row;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    a {
        margin: 2px 0 0;
    }
    
    @media only screen and (max-width: ${maxSize.medium}) {
        font-size: 28px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 24px;
    }
`

const Icon = styled(MdOpenInNew)`
    color: #080808;
    font-size: 18px;
    margin: 0 0 0 4px;
`

export { Wrapper, Icon }