import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 10% 12px;

    @media only screen and (max-width: ${maxSize.large}) {
        flex-direction: column;
        padding: 72px 5% 12px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 56px 5% 12px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 12px;
    }

    a {
        align-self: flex-end;
    }

    button {
        margin: 4px 0 0;
    }
`

const Title = styled.p`
    font-size: 28px;
    font-weight: 500;
    margin: 28px 0 14px;
`

const NoTests = styled.div`
    font-size: 18px;
`

export { Wrapper, Title, NoTests }