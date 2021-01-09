import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div`
    padding: 32px 5% 0px;
    height: 85px;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${maxSize.medium}) {
        height: auto;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 16px 5% 0px;
    }
`

const Filters = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 16px 0;
    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        margin: 0;
        width: 95%;
    }
`

const Filter = styled.div`
    margin: 0 16px 0 0;
    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 6px 0 0;
    }
`

const Searchbar = styled.div`
    width: 20%;
    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 30%;
    }
    @media only screen and (max-width: ${maxSize.medium}) {
        width: 95%;
    }
`

const FiltersTitle = styled.div`
    font-size: 13px;
    padding: 0 0 2px 4px;
    font-family: 'Roboto', sans-serif;
    color: ${colors.primary};
`

export { Wrapper, Filters, Filter, Searchbar, FiltersTitle }