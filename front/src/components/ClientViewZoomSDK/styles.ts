import styled from 'styled-components'

export interface StyleProps {
  width?: string
  height?: string
}

export const ClientViewZoomSDKStyle = styled.div<StyleProps>`
  display: flex;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: row;
  justify-content: center;
`
