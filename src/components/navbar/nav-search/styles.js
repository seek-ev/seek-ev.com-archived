import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
`

const Input = styled.input`
    width: 100%;
    outline: none;
    display: block;
    font-size: 16px;
    font-weight: 500;
    border-radius: 7px;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #fff;
    -webkit-appearance: none;
    padding: 7px 8px 7px 6px;
    transition: all .25s ease;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,.08);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0,0,0,.08);
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0,0,0,.08);

    :focus {
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,.12);
        -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,.12);
        -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,.12);
    }

    :hover {
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,.12);
        -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,.12);
        -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,.12);
    }
`

const Dropdown = styled.div`
    z-index: 1;
    width: 100%;
    margin: 4px 0;
    position: absolute;
    border-radius: 7px;
    background-color: #fff;
    max-height: 320px;
    overflow: auto;
    overflow-x: hidden;
    padding: 4px 6px;
    scrollbar-width: thin;;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,.08);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0,0,0,.08);
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0,0,0,.08);

    a {
        text-decoration: none;
        color: #080808;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: #222222;
        border-radius: 24px;
    }
`


const DropdownItem = styled(Link)`
    z-index: 1;
    width: 100%;
    transition: all .25s ease;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px;
    color: #444444;
    margin: 4px 0;
    background-color: #fff;
    border-radius: 4px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

    :hover {
        color: #fff;
        background-color: #1DB954e3;
        box-shadow: 2px 1px 8px 0px rgba(0,0,0,.12);
        -moz-box-shadow: 2px 1px 8px 0px rgba(0,0,0,.12);
        -webkit-box-shadow: 2px 1px 8px 0px rgba(0,0,0,.12);

        .search-desc {
            color: #eeeeee;
        }
    }

    ${props => props.$disabled ? `
        color: #747474 !important;
        pointer-events: none;

        :hover {
            color: #5a5a5a;
            background-color: #fff;
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
        }
    ` : ''}

    ${props => props.$history ? `
        font-size: 12px;
        font-weight: 500;
        padding: 4px 4px;
    ` : ''}
`

const Info = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const InfoImg = styled.img`
    object-fit: contain;
    height: 24px;
    width: 24px;
    margin: 0 6px 0;


    ${props => props.round ? `
        border-radius: 12px;
    ` : ''}
`

const SearchText = styled.span`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`

const SearchDescription = styled.span`
    color: #8d8d8d;
    font-size: 14px;
    margin: 0 0 0 4px;
`

const HistoryIcon = styled.div`
    font-size: 16px;
    pointer-events: auto;

    :hover {
        color: ${colors.primary}
    }
`

export { Wrapper, Input, Dropdown, DropdownItem, Info, InfoImg, SearchText, SearchDescription, HistoryIcon }