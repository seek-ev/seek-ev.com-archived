import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    border: none;
    outline: none;
    display: flex;
    font-size: 16px;
    min-width: 150px;
    max-width: 250px;
    font-weight: 500;
    max-height: 160px;
    width: fit-content;
    border-radius: 7px;
    position: relative;
    flex-direction: row;
    align-items: center;
    padding: 6px 0px 2px;
    background-color: #fff;
    scroll-behavior: smooth;
    transition: all .25s ease;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);

    :focus {
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,.13);
    }

    :hover {
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,.13);
    }

    :disabled {
         box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    }

    :hover:disabled {
        box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    }

    :disabled:hover::placeholder {
        box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    }

    ::placeholder:disabled {
        box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    }

    ${props => props.raise ? `
        :hover {
            transform: translate(0, -6px);
        }

        :focus {
            transform: translate(0, -6px);
        }
    ` : ''}
`

const Options = styled.div`
    top: 39px;
    z-index: 10;
    width: 100%;
    height: auto;
    overflow: auto;
    max-height: 150px;
    position: absolute;
    overflow-x: hidden;
    border-radius: 7px;
    background-color: #fff;

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

const Option = styled.div`
    width: 100%;
    margin: 1px 0;
    padding: 4px 8px;

    ${props => props.isOpen ? `
        :hover {
            color: #fff;
            background-color: ${colors.primary};
        }
    ` : ''}
    
    :first-child {
        margin: 0 0 1px;
        border-radius: 7px 7px 0 0;
    }

    :last-child {
        margin: 1px 0 0;
        border-radius: 0 0 7px 7px;
    }

    ${props => props.selected ? `color: ${colors.primary}` : ''}
`

const Icon = styled.div`
    position: absolute;
    top: 8px;
    right: 3px;
    margin: 0; 
    padding: 0;
    line-height: 0;
    font-size: 24px;
    align-self: flex-start;
`

export { Wrapper, Options, Option, Icon }