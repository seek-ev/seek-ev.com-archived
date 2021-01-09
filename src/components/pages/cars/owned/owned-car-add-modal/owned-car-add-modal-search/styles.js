import styled from 'styled-components/macro'

const Wrapper = styled.div`
    margin: 4px 0 12px;
`

const SearchInput = styled.input`
    width: 100%;
    outline: none;
    display: block;
    font-size: 18px;
    font-weight: 500;
    border-radius: 7px;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #fff;
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
        -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0);
    }
`

const Dropdown = styled.div`
    z-index: 1;
    width: 96%;
    margin: 4px 0;
    position: absolute;
    border-radius: 7px;
    background-color: #fff;
    max-height: 320px;
    overflow: auto;
    overflow-x: hidden;
    padding: 4px 6px;
    scrollbar-width: thin;
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

const Desc = styled.div``

const DropdownItem = styled.div`
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
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    :hover {
        color: #fff;
        background-color: #1DB954e3;
        box-shadow: 2px 1px 8px 0px rgba(0,0,0,.12);
        -moz-box-shadow: 2px 1px 8px 0px rgba(0,0,0,.12);
        -webkit-box-shadow: 2px 1px 8px 0px rgba(0,0,0,.12);
        ${Desc} {
            color: #eeeeee
        }
    }
`

export { Wrapper, SearchInput, Dropdown, DropdownItem, Desc }