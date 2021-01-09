import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    top: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: row;
    padding: 4px 12px 0;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;
    box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    -moz-box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    -webkit-box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    
    .nav-hidden-medium {
        @media only screen and (max-width: ${maxSize.medium}) {
            display: none;
        }
    }

    @media only screen and (max-width: 1251px) {
        padding: 2px 6px 0;
    }
`

const NavLeft = styled.div`
    width: 30%;

    @media only screen and (max-width: ${maxSize.medium}) {
        width: auto;
    }
`

const NavMiddle = styled.div`
    min-width: 20%;
    max-width: 60%;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
        padding: 0 0 0 2%;
    }
`

const NavRight = styled.div`
    display: flex;
    min-width: 30%;
    max-width: 40%;
    height: 100%;
    flex-direction: row;
    align-item: flex-start;
    justify-content: flex-end;
    
    button {
        margin: 0 6px 0;
    }

    @media only screen and (max-width: ${maxSize.small}) {
        min-width: 32%;
    }
`

export { Wrapper, NavLeft, NavMiddle, NavRight }