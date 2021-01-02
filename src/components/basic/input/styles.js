import styled from 'styled-components/macro'

const Wrapper = styled.div`
    width: 100%;
    height: 52px;
`

const SInput = styled.input`
  width: 100%;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    border-radius: 7px;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #fff;
    padding: 7px 8px 7px 7px;
    transition: all .25s ease;
    font-family: 'Roboto', sans-serif;
    box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    -moz-box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    -webkit-box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);

    :focus {
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
        -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
        -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
    }

    :hover {
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
        -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
        -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
    }

    :focus:hover::placeholder {
        color: #616161;
    }

    :hover::placeholder {
        color: #080808;
    }

    ::placeholder {
        color: #616161;
        font-weight: 500;
    }

    :-ms-input-placeholder {
        color: #616161;
        font-weight: 500;
    }

    ::-ms-input-placeholder {
        color: #616161;
        font-weight: 500;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
        -moz-box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
        -webkit-box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    }
    
    :disabled {
        color: #616161;
        opacity: 0.7;
        border: 2px solid #61616100;
    }

    :hover:disabled {
        color: #616161;
    }

    :disabled:hover::placeholder {
        color: #616161;
    }
    
    ::placeholder:disabled {
        color: #616161;
        font-weight: 500;
    }

    :disabled:hover {
        color: #616161;
        box-shadow: -8px 10px 16px 0px rgba(0,0,0,.08);
    }

    ${props => props.raise ? `
        :focus {
            transform: translate(0, -6px);
            box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
            -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
            -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
        }

        :hover {
            transform: translate(0, -6px);
            box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
            -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
            -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,.12);
        }

        ::placeholder {
            color: #080808;
        }
    ` : ''}

    ${props => props.border ? `
        border: 2px solid #080808;

        :focus {
            box-shadow: 0px 10px 20px 1px rgba(0,0,0,.12);
            -moz-box-shadow: 0px 10px 20px 1px rgba(0,0,0,.12);
            -webkit-box-shadow: 0px 10px 20px 1px rgba(0,0,0,.12);
        }

        :hover {
            box-shadow: 0px 10px 20px 1px rgba(0,0,0,.12)
            -moz-box-shadow: 0px 10px 20px 1px rgba(0,0,0,.12)
            -webkit-box-shadow: 0px 10px 20px 1px rgba(0,0,0,.12)
        }
    ` : ''}

    ${props => props.error ? `
        font-weight: 500;
        color: #ed1c46e3;
        border: 2px solid rgba(237, 28, 70, 0.9);

        ::placeholder {
            font-weight: 500;
            color: #ed1c46e3;
        }

        :-ms-input-placeholder {
            font-weight: 500;
            color: #ed1c46e3;
        }

        ::-ms-input-placeholder {
            font-weight: 500;
            color: #ed1c46e3;
        }

        :hover {
            font-weight: 500;
            color: #ed1c46e3;
        }

        :hover::placeholder {
            font-weight: 500;
            color: #ed1c46e3;
        }
    ` : ''}

    ${props => props.valid ? 'border: 2px solid rgba(30, 211, 93, 0.9)' : ''}

    ${props => props.round ? `
        padding: 7px 9px;
        border-radius: 16px;
        color: red;
    ` : ''}
`

const ErrorMessage = styled.div`
    max-width: 190px;
    font-size: 11px;
    overflow: hidden;
    color: #ed1c46;
    font-weight: bold;
    white-space: nowrap;
    padding: 0px 0 0 4px;
    text-overflow: ellipsis;
`

export { Wrapper, SInput, ErrorMessage }