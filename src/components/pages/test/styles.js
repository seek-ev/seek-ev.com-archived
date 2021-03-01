import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 10% 0px;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 72px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }

    @media only screen and (max-width: ${maxSize.desktop}) and (orientation: landscape) {
        padding: 84px 5% 0px;
    }
`

export { Wrapper }