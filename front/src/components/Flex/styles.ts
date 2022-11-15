import styled from 'styled-components'

export interface StyleProps {
  width?: string
  height?: string
  direction?: 'column' | 'row' | (string & {})
  justifyContent?: 'center' | 'start' | 'end' | (string & {})
  alignItems?: 'center' | 'start' | 'end' | (string & {})
  gap?: number
  wrap?: 'wrap' | (string & {})
}

export const FlexStyle = styled.div<StyleProps>`
  display: flex;
  gap: ${props => `${props.gap}px`};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent || 'space-around'};
  align-items: ${props => props.alignItems || 'center'};
  flex-flow: ${props => props.wrap};
`
