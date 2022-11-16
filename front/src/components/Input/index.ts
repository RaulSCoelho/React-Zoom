import { shade } from 'polished'
import styled from 'styled-components'

export interface StyleProps {
  width?: string
  height?: string
  fontSize?: string
  textAlign?: 'start' | 'center' | 'end'
}

export const Input = styled.input<StyleProps>`
  background-color: ${props => shade(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.text};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  font-size: ${props => props.fontSize || '12pt'};
  text-align: ${props => props.textAlign};
  padding: 5px;
  border: 0;
  border-radius: 0.25rem;
`
