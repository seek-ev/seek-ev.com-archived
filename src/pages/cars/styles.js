import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Container = styled.div``

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: width;
    align-items: flex-start;
    padding: 124px 10% 0px;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 32px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }
`

const Header = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 6px;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
`

const NewButton = styled.div`
    width: auto;
    margin: 4px 0;
    text-align: right;
`

const Owned = styled.div`
    margin: 0 0 0 12px;
    width: 100%;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 12px 0 0;
        width: 100%;
    }
`

export { Container, Wrapper, Header, Title, NewButton, Owned }