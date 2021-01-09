import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 12px 0 0;
    flex-direction: row;
    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 6px 0 0;
    }
`

const Item = styled.div`
    width: 80px;
    font-weight: 500;
    text-align: center;
    margin: 0 1px;
    padding: 12px 6px 4px;
    font-family: 'Roboto', sans-serif;
`

const ChosenItem = styled(Item)`
   border-bottom: 2px solid #131313;
`

const DisabledItem = styled(Item)`
    color: #a3a3a3;
    border-bottom: none;
`

export { Wrapper, Item, ChosenItem, DisabledItem }