import styled from 'styled-components'

interface TextAreaProps {
  width?: string
  height?: string
}

export const TextArea = styled.textarea<TextAreaProps>`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  resize: none;
  border: 0;
  font-size: 12pt;
`
