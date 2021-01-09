import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
`

const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const UserCar = styled(Link)`
    width: 100%;
    padding: 8px 12px;
    margin: 6px 0;
    display: flex;
    color: #080808;
    text-decoration: none;
    border-radius: 7px;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0px 1px 8px -1px rgba(0,0,0, 0.12);
    -moz-box-shadow: 0px 1px 8px -1px rgba(0,0,0, 0.12);
    -webkit-box-shadow: 0px 1px 8px -1px rgba(0,0,0, 0.12);
`

const UserCarLeft = styled.div`
    display: flex;
    flex-direction: row;
`

const Spacer = styled.div`
    margin: 0 6px;
`

const Number = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const Model = styled.div`
    font-size: 18px;
    font-weight: 500;
    display: flex;
`

const Verified = styled.div`
    font-size: 13px;
    margin: 0 0 0 3px;

    ${props => props.verified ? `color: ${colors.primary}` : `color: ${colors.error}`}
`

const Created = styled.div``

const NoCars = styled.div``

export { Wrapper, List, UserCar, Spacer, UserCarLeft, Number, Model, Verified, Created, NoCars }