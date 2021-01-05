import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div`
    ${props => props.logged ? '' : 'display: none;'}
`

const Icon = styled.div`
    right: 1%;
    bottom: 2%;
    color: #fff;
    z-index: 100;
    font-size: 28px;
    position: fixed;
    border-radius: 50%;
    padding: 11px 13px 6px;
    background-color: ${colors.primary};
    transition: all 0.3s ease 0s;
    box-shadow: 0px 0px 12px 6px rgba(0,0,0, 0.12);
    -moz-box-shadow: 0px 0px 12px 6px rgba(0,0,0, 0.12);
    -webkit-box-shadow: 0px 0px 12px 6px rgba(0,0,0, 0.12);

    @media only screen and (max-width: ${maxSize.medium}) {
        bottom: 2%;
        right: 2%;
    }
    
    :hover {
        color: ${colors.primary};
        background-color: #fff;
    }
`

export { Wrapper, Icon }