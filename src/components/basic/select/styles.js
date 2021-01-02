import styled from 'styled-components/macro'

const Wrapper = styled.select`
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    min-width: 150px;
    font-weight: 500;
    padding: 8px 12px 8px 7px;
    border-radius: 7px;
    background-color: #fff;
    scroll-behavior: smooth;
    transition: all .25s ease;
    font-family: 'Roboto', sans-serif;
    box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);

    :focus {
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,.13);
    }

    :hover {
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

export { Wrapper }