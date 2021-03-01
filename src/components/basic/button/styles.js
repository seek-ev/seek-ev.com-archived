import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const opacity = 0.3

const Wrapper = styled.button`
    border: 0px;
    outline: none;
    font-size: 16px;
    color: #212121;
    font-weight: 500;
    border-radius: 7px;
    margin-bottom: 12px;
    padding: 7px 1.6rem;
    letter-spacing: .5px;
    background-color: #fff;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);

    :hover {
        color: #fff;
        background-color: ${colors.primary};
        box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        -moz-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        -webkit-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    }

    :disabled {
        color: #212121 !important;
        background-color: #fff !important;
        box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07) !important;
        -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07) !important;
        -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07) !important;
    }

    :disabled:hover {
        color: #212121;
        background-color: #fff;
        box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
        -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
        -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    }

    ${props => props.clean ? `
        :hover {
            color: #212121 !important;
            background-color: #fff !important;
            box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.15);
            -moz-box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.15);
            -webkit-box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.15);
        }
    ` : ''}

    ${props => props.raise ? `
        transition: all 0.3s ease 0s;
        :hover {
            transform: translateY(-6px);
            box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
            -moz-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
            -webkit-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        }
    ` : ''}

    ${props => props.primary ? `
        color: #fff;
        background-color: ${colors.primary};

        :hover {
            background-color: #1DB954e3;
            box-shadow: 1px 2px 4px 2px rgba(30, 211, 93, ${opacity});
            -moz-box-shadow: 1px 2px 4px 2px rgba(30, 211, 93, ${opacity});
            -webkit-box-shadow: 1px 2px 4px 2px rgba(30, 211, 93, ${opacity});
        }
    ` : ''}

    ${props => props.error ? `
        color: #fff;
        background-color: ${colors.error};

        :hover {
            background-color: #ed1c46e3;
            box-shadow: 0px 2px 8px 1px rgba(237, 28, 70, ${opacity});
            -moz-box-shadow: 0px 2px 8px 1px rgba(237, 28, 70, ${opacity});
            -webkit-box-shadow: 0px 2px 8px 1px rgba(237, 28, 70, ${opacity});
        }
    ` : ''}

    ${props => props.dark ? `
        color: #fff;
        background-color: #080808;

        :hover {
            background-color: #080808e3;
            box-shadow: 0px 2px 8px 1px rgba(8, 8, 8, ${opacity});
            -moz-box-shadow: 0px 2px 8px 1px rgba(8, 8, 8, ${opacity});
            -webkit-box-shadow: 0px 2px 8px 1px rgba(8, 8, 8, ${opacity});
        }
    ` : ''}

    ${props => props.blue ? `
        color: #fff;
        background-color: #0070f3;

        :hover {
            background-color: #0071f3e3;
            box-shadow: 0px 2px 8px 1px rgba(0, 113, 243, ${opacity});
            -moz-box-shadow: 0px 2px 8px 1px rgba(0, 113, 243, ${opacity});
            -webkit-box-shadow: 0px 2px 8px 1px rgba(0, 113, 243, ${opacity});
        }
    ` : ''}

    ${props => props.round ? 'border-radius: 16px;' : ''}

    ${props => props.mr ? `
        margin-right: ${props.mr}px;
    ` : ''}

    ${props => props.ml ? `
        margin-left: ${props.ml}px;
    ` : ''}
`

export { Wrapper }