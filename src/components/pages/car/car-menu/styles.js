import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div`
    width: auto;
    display: flex;
    min-width: 30%;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 100%;
    }
`

const Item = styled.div`
    height: 32%;
    display: flex;
    cursor: pointer;
    margin: 0 0 6px;
    padding: 8px 12px;
    border-radius: 7px;
    flex-direction: row;
    transition: all 0.3s ease 0s;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0, 0.2);
    -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0, 0.2);
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0, 0.2);

    :hover {
        box-shadow: 1px 2px 8px 0px rgba(0,0,0, 0.20);
        -moz-box-shadow: 1px 2px 8px 0px rgba(0,0,0, 0.20);
        -webkit-box-shadow: 1px 2px 8px 0px rgba(0,0,0, 0.20);
    }

    ${props => props.chosen ? `
        color: #fff;
        background-color: ${colors.primary};
        box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        -moz-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        -webkit-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    ` : ''}

    ${props => props.disabled ? `
        opacity: 0.6;
        color: #000;
        cursor: default;
        background: #fff;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;

        :hover {
            box-shadow: none;
        }
    ` : ''}
`

const ItemColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;

    span {
        color: ${colors.primary};
        position: absolute;
        font-size: 12px;
        margin: 4px 4px 0;
    }
`

const Description = styled.div`
    font-size: 18px;
    padding: 4px 1px;
`

const Icon = styled.div`
    font-size: 32px;
`


export { Wrapper, Item, ItemColumn, Title, Description, Icon }