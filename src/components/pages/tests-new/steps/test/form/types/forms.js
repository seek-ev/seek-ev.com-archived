import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import { Input } from 'components/basic/input'

const Wrapper = styled.div`
    display: flex;
    padding: 2px 2px 10px;
    flex-direction: row;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

const TestInput = styled(Input)`
    margin: 6px 7px 0 0;
`

const TypesWrapper = styled.div``

export { Wrapper, TestInput, TypesWrapper }