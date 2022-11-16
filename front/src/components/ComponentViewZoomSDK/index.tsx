import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Text } from 'components/Text'
import { ZoomContext } from 'context/ZoomContext'

import { ComponentViewZoomSDKStyle } from './styles'

export const ComponentViewZoomSDK: React.FC = () => {
  const { client, logUser } = useContext(ZoomContext)
  const [searchParams] = useSearchParams()
  const queryCode = searchParams.get('code')

  useEffect(() => {
    if (queryCode) {
      logUser(queryCode)

      const meetingSDK = document.getElementById('meetingSDK')
      client.init({
        zoomAppRoot: meetingSDK,
        language: 'en-US',
        customize: {
          video: {
            isResizable: false,
            popper: {
              disableDraggable: true,
            },
            viewSizes: {
              default: {
                width: window.innerWidth * 0.5,
                height: window.innerWidth * 0.5 * 0.6,
              },
              ribbon: {
                width: 300,
                height: 700,
              },
            },
          },
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryCode])

  return (
    <ComponentViewZoomSDKStyle>
      <div className="meetingSDKContainer">
        <Text textAlign="center">Video</Text>
        <div id="meetingSDK"></div>
      </div>
    </ComponentViewZoomSDKStyle>
  )
}
