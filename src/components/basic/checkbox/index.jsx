import React from 'react'

// Styles
import { Wrapper, Title, CheckboxContainer, DefaultCheckbox, StyledCheckbox, Icon } from './styles'

const Checkbox = ({ className, direction, title, checked, name, onChange, disabled }) => {
    const change = (e) => {
        onChange(e.target)
    }

    return (
        <Wrapper className={className} direction={direction}>
            <Title>{title}</Title>
            <CheckboxContainer>
                <DefaultCheckbox checked={checked} name={name} onChange={change} disabled={disabled} />
                <StyledCheckbox checked={checked} disabled={disabled}>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
            </CheckboxContainer>
        </Wrapper>
    )
}

export { Checkbox }