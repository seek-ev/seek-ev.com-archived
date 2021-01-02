import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// Components
import { Button } from 'components/basic/button'

const Navbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 42px 20% 0;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.large}) {
        padding: 24px 15% 0
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 6px 12px 0;
    }
`

const TermsButton = styled(Button)`
    margin-bottom: 0px;
`


export { Navbar, TermsButton }