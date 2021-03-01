import styled from 'styled-components/macro'

// Components
import { Input } from 'components/basic/input'

const Wrapper = styled.div`
    display: flex;
    padding: 14px 2px 4px;
    flex-direction: row;
`

const TestInput = styled(Input)`
    margin: 0 7px 0 0;
`

export { Wrapper, TestInput }