import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import { Input } from 'components/basic/input'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0px 0px 10px;
`

const TInput = styled(Input)`
    max-width: 200px;
    margin: 12px 7px 0 0;

    @media only screen and (max-width: ${maxSize.medium}) {
        max-width: 100%;
    }
`

export { Wrapper, TInput }