import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Menu = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuItem = styled.div`
    font-size: 18px;
    font-weight: 500;
    padding: 6px 52px 6px 12px;
    margin: 2px 0;
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.3s ease 0s;
    font-family: 'Roboto', sans-serif;
    @media only screen and (max-width: ${maxSize.medium}) {
        text-align: center;
        padding: 6px 0px;
        width: 40%;
        align-self: center;
    }

    :hover {
        box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
        -moz-box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
        -webkit-box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
    }

    ${props => props.chosen ? `
        color: #fff;
        background-color: ${colors.primary};
        box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
        -moz-box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
        -webkit-box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
    ` : ''}

    ${props => props.disabled ? `
        cursor: default;
        color: #616161;

        :hover {
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
        }
    ` : ''}
`

export { Menu, MenuItem }