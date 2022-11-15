import React from 'react'

import { FlexStyle, StyleProps } from './styles'

interface Props extends StyleProps {
  children?: React.ReactNode
  style?: object
  onClick?: () => void
}

export const Flex: React.FC<Props> = props => {
  return (
    <FlexStyle style={props.style} {...props}>
      {props.children}
    </FlexStyle>
  )
}
