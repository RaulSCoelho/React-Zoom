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

export const ZoomSDKStyle = styled.div<StyleProps>`
  display: flex;
  gap: ${props => `${props.gap}px`};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'start'};
  flex-flow: ${props => props.wrap};

  .column {
    flex: 1;
    position: relative;
  }

  #meetingSDK {
    top: 59px !important;
    left: 0 !important;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 244px; /* width of speaker and ribbon view */
  }
`
