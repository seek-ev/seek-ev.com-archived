import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// Components
import { Input } from 'components/basic/input'

// Icons
import { MdClose, MdSave } from 'react-icons/md'

const Wrapper = styled.div`
    width: auto;
`

const Title = styled.div`
    margin: 0 0 2px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.primary};
    font-family: 'Roboto', sans-serif;
`

const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const CInput = styled(Input)`
    max-width: 220px;
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
    color: ${colors.primary};
`

export { Wrapper, Title, Form, CInput, Icon, CloseIcon, SaveIcon }