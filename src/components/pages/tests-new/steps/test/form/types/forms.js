import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import { Input } from 'components/basic/input'
import { Checkbox } from 'components/basic/checkbox'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0px 0px 10px;

    ${props => props.margin ? 'margin: 0 0 4px' : ''}
`

const TestInput = styled(Input)`
    max-width: 200px;
    margin: 12px 7px 0 0;

    @media only screen and (max-width: ${maxSize.medium}) {
        max-width: 100%;
    }
`

const TestCheckbox = styled(Checkbox)`
    max-width: 200px;
    margin: 12px 7px 0 0;

    @media only screen and (max-width: ${maxSize.medium}) {
        max-width: 100%;
    }
`

const Times = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`

const TypesWrapper = styled.div`
    width: 100%;
`

export { Wrapper, TestInput, TestCheckbox, TypesWrapper, Times }