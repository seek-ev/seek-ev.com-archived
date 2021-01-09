import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column; 
    }
`

const HeaderInput = styled.div`
    min-width: 260px;
    margin: 0 64px 24px 0;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 0;
    }
`

const HeaderInputSpan = styled.span`
    margin: 0 0 3px;
    font-weight: 500;
`

const HeaderSelect = styled.div`
    width: 260px;
    margin: 0 64px 24px 0;

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
        margin: 0 0 12px;
    }
`

const HeaderSelectSpan = styled.span`
    margin: 0 0 3px;
    font-weight: 500;
`

const HeaderInputCheckbox = styled.div`
    display: flex;
    margin: 6px 0 0;
    max-width: 250px;

    input {
        -ms-transform: scale(2);
        -moz-transform: scale(2);
        -webkit-transform: scale(2);
        -o-transform: scale(2);
        transform: scale(2);
    }
`

const HeaderInputCheckboxSpan = styled.span`
    white-space: nowrap;
    margin: 0 8px 3px 0;
`

export {
    Wrapper,
    HeaderRow,
    HeaderInput,
    HeaderSelect,
    HeaderInputSpan,
    HeaderSelectSpan,
    HeaderInputCheckbox,
    HeaderInputCheckboxSpan,
}