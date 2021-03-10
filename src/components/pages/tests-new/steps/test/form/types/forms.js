import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import { Input } from 'components/basic/input'

const Wrapper = styled.div`
    display: flex;
    padding: 14px 2px 4px;
    flex-direction: row;
    flex-wrap: wrap;
`

const TestInput = styled(Input)`
    margin: 0 7px 0 0;
    max-width: 200px;

    @media only screen and (max-width: ${maxSize.medium}) {
       max-width: 100%;
    }
`

const TypesWrapper = styled.div``

export { Wrapper, TestInput, TypesWrapper }