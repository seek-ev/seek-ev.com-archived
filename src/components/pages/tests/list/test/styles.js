import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
    width: 100%;
    display: flex;
    margin: 6px 0;
    padding: 5px 12px;
    border-radius: 6px;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-between;
    box-shadow: 1px 3px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 1px 3px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 1px 3px 6px 2px rgba(0,0,0,0.07);

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

const Car = styled.div`
    width: 10%;
    color: #525252;


    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 100%;
    }
`

const Text = styled.div`
    color: #000;
    display: inline-block;
`

const Type = styled.div`
    min-width: 140px;
    color: #525252;
    text-align: left;

    @media only screen and (max-width: ${maxSize.medium}) {
        align-self: flex-end;
    }
`

const Date = styled(Moment)`
    color: #080808;
    min-width: 100px;
`

export { Wrapper, Car, Text, Type, Date }