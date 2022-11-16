import React from 'react'

import { Text } from 'components/Text'

import { ClientViewZoomSDKStyle } from './styles'

export const ClientViewZoomSDK: React.FC = () => {
  return (
    <ClientViewZoomSDKStyle>
      <div>
        <Text textAlign="center">Video</Text>
      </div>
    </ClientViewZoomSDKStyle>
  )
}
