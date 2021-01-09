import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Profile = styled(Link)`
    display: flex;
    flex-direction: row;
    height: 60%;
    max-width: 180px;
    padding: 2px 6px 2px 2px;
    margin: 3px 0;
    border-radius: 20px;
    align-items: center;
    color: #080808;
    background-color: #fff;
    text-decoration: none;
    transition: all .25s ease;
    font-family: 'Roboto', sans-serif;

    :hover {
        background-color: #f3f1f1;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        height: auto;
        padding: 2px;
        margin: 0px;
    }
`

const Avatar = styled.div`
 width: 32px;
    height: 32px;
    align-self: flex-start;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    
    @media only screen and (max-width: ${maxSize.medium}) {
        width: 38px;
        height: 38px;
        align-self: flex-start;
    }
`

const Username = styled.div`
    margin: 2px 6px 4px;
    max-width: 70%;
    height: auto;
    font-weight: 500;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;

    @media only screen and (max-width: ${maxSize.medium}) {
        display: none; 
    }
`

export { Profile, Avatar, Username }