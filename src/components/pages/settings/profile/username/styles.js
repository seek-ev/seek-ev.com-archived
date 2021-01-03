import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

// Icons
import { MdClose, MdSave } from 'react-icons/md'

const Username = styled.div`
    margin: 0 0 0 18px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 22px;

    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 12px 0 0
    }
`

const UsernameTitle = styled.div`
    margin: 0 0 0 4px;
    font-weight: 500;
    font-size: 14px;
`

const UsernameInput = styled.div`
    margin: 10px 0 0;
    font-weight: 500;

    .settings-input {
        background-image: none !important
    }
`
const Icon = styled.div`
    margin: 0 6px;
    font-size: 24px;
`

const CloseIcon = styled(MdClose)`
    margin: 0 4px;
    color: ${colors.error};
`

const SaveIcon = styled(MdSave)`
    color: ${colors.primary}
`


export { Username, UsernameTitle, UsernameInput, Icon, CloseIcon, SaveIcon }