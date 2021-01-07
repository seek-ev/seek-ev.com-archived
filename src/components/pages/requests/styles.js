import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 124px 10% 0px;

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 94px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
`

export { Wrapper, Title }