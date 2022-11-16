import styled from 'styled-components'

export interface StyleProps {
  width?: string
  height?: string
  direction?: 'column' | 'row' | (string & {})
  alignItems?: 'center' | 'start' | 'end' | (string & {})
  gap?: number
  flexFlow?: 'wrap' | (string & {})
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | (string & {})
}

export const Flex = styled.div<StyleProps>`
  display: flex;
  gap: ${props => `${props.gap}px`};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-flow: ${props => props.flexFlow};
`
