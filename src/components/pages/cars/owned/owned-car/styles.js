import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// Icons
import { MdClose } from 'react-icons/md'

const Wrapper = styled.div`
    display: flex;
    margin: 7px 0px;
    font-weight: 500;
    padding: 4px 6px 4px 12px;
    border-radius: 7px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 8px -1px rgba(0,0,0, 0.12);
    -moz-box-shadow: 0px 1px 8px -1px rgba(0,0,0, 0.12);
    -webkit-box-shadow: 0px 1px 8px -1px rgba(0,0,0, 0.12);
`

const WrapperRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CarButton = styled(MdClose)`
    color: ${colors.error};
    cursor: pointer;
    font-size: 26px;
`

export { Wrapper, WrapperRow, CarButton }