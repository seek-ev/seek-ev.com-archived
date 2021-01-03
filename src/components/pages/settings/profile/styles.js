import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Profile = styled.div`
    padding: 0 64px 0;
    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 0;
    }
`

const ProfileTitle = styled.div`
    font-size: 22px;
    margin: 0 0 4px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
`

const Header = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 12px 0 0;
        flex-direction: column;
    }
`

const Details = styled.div`
    display: flex;
    padding: 16px 0;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
`

const DetailsItem = styled.div`
    margin: 4px 0 8px;
`

const Title = styled.div`
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 500;
    padding: 2px 0;
`

const Email = styled.div`
    padding: 0 2px 0;
    font-weight: 500;
`

export { Profile, ProfileTitle, Header, Details, DetailsItem, Title, Email }