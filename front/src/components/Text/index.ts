import styled from 'styled-components'

export interface StyleProps {
  width?: string
  height?: string
  fontSize?: string
  padding?: string
  bold?: boolean
  textAlign?: 'start' | 'center' | 'end'
}

export const Text = styled.p<StyleProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.fontSize || '12pt'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
`
