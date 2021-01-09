import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Menu = styled.div`
    margin: 1px 2px 0 8px;
    text-align: center;
    display: block;
    position: relative;
    height: 33px;

    @media only screen and (max-width: ${maxSize.medium}) {
        height: 40px;
        margin: 0 2px 0 8px;
    }
`
const Icon = styled.div`
    display: block;
    font-size: 33px;
    text-align: center;

    :hover {
        color: ${colors.primary}
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        height: 40px;
        font-size: 40px;
    }
`

const DropMenu = styled.div`
    z-index: 1;
    width: 160px;
    display: none;
    position: absolute;
    background-color: #fff;
    margin: 0 0 0 -122px;
    padding: 4px 6px;
    text-align: center;
    font-size: 18px;
    border-radius: 12px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    -moz-box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    -webkit-box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);

    a {
        color: #080808;
        text-decoration: none;
    }
`

const MenuItem = styled.div`
    padding: 5px 0px;
    margin: 3px 0;
    border-radius: 7px;
    transition: all .25s ease;
    
    :hover {
        box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
        -moz-box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
        -webkit-box-shadow: 0 2px 6px 0px rgba(0,0,0,.08);
    }
`

const Logout = styled(MenuItem)`
    color: ${colors.error};
    cursor: pointer;
`

export { Menu, Icon, DropMenu, MenuItem, Logout }