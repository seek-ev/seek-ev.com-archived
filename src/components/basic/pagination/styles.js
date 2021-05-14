import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    margin: 4px 0;
    align-items: center;
    align-self: flex-end;
    justify-self: flex-end;
`

const Button = styled.button`
    padding: 2px;
    border: none;
    outline: none;
    color: #474747;
    display: flex;
    font-size: 24px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 12px 1px rgba(0,0,0, .2);
    -moz-box-shadow: 2px 2px 12px 1px rgba(0,0,0, .2);
    -webkit-box-shadow: 2px 2px 12px 1px rgba(0,0,0, .2);

    ${props => props.disabled ?`
        color: #8c8c8c;
    ` :''}
`

const Pages = styled.div`
    display: flex;
    margin: 0 2px;
    font-size: 20px;
    flex-direction: row;
`

const Page = styled.button`
    height: 28px;
    border: none;
    outline: none;
    margin: 0 2px;
    font-size: 21px;
    padding: 2px 8px;
    border-radius: 7px;
    box-shadow: 2px 2px 12px 1px rgba(0,0,0, .2);
    -moz-box-shadow: 2px 2px 12px 1px rgba(0,0,0, .2);
    -webkit-box-shadow: 2px 2px 12px 1px rgba(0,0,0, .2);

    ${props => props.chosen ? `
        color: #fff;
        background-color: ${colors.primary};
    ` : ''}

    ${props => props.dots ? `
        width: 30px;
        font-size: 16px;
    ` : ''}
`

export { Wrapper, Button, Pages, Page }