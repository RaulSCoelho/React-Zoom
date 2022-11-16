import React, { useContext } from 'react'

import { Button } from 'components/Button'
import { ClientViewZoomSDK } from 'components/ClientViewZoomSDK'
import { Flex } from 'components/Flex'
import { ZoomContext } from 'context/ZoomContext'

export const ClientViewZoom: React.FC = () => {
  const { zakToken } = useContext(ZoomContext)
  const connectZoomUrl = `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_ZOOM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_ZOOM_REDIRECT_URL}`

  return (
    <Flex justifyContent="start">
      <Flex
        direction="row"
        height="auto"
        justifyContent="center"
        gap={20}
        style={{ padding: '10px' }}
      >
        <a href={connectZoomUrl} style={{ display: 'flex' }}>
          <img src="add_to_zoom.png" height="32" alt="Add to ZOOM" />
        </a>
        {zakToken && <Button>Start Meeting</Button>}
      </Flex>
      <ClientViewZoomSDK />
    </Flex>
  )
}
