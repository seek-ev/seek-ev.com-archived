import styled from 'styled-components'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  color: ${colors.primary};
`

const Type = styled.h4`
  margin: 3px 0 0;
  font-weight: 400;
`

const Creator = styled.h4`
  display: flex;
  margin: 3px 0 0;
  font-weight: 400;
`

const Highlighted = styled.span`
  margin: 0 4px;
  font-weight: 500;
  color: ${colors.primary};
`

const Date = styled.h4`
  margin: 0 4px;
`

export { Wrapper, Title, Type, Creator, Highlighted, Date }