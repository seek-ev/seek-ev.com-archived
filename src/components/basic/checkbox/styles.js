import styled from 'styled-components/macro'

// Styles
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    height: 52px;
    margin: ${props => props.title ? '0 0 8px' : '0px'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
`

const Title = styled.div`
    font-size: 12px;
    margin: 0 0 0 3px;
    color: ${colors.primary};
`

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding: 6px 2px;
`

const DefaultCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    opacity: 0;
    width: 18px;
    height: 18px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    outline: none;
    position: absolute;
    white-space: nowrap;
`

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    background: ${props => props.checked ? colors.primary : 'papayawhip'};
    border-radius: 3px;
    transition: all 150ms;

    ${props => props.disabled ? `
        opacity: 0.5;
    ` : ''}

    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`

export { Wrapper, Title, CheckboxContainer, DefaultCheckbox, StyledCheckbox, Icon }