import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Text } from 'components/Text'
import { ZoomContext } from 'context/ZoomContext'
import { useWindowSize } from 'hooks/useWindowSize'

import { ZoomSDKStyle } from './styles'

export const ZoomSDK: React.FC = () => {
  const { client, logUser } = useContext(ZoomContext)
  const { width } = useWindowSize()
  const [searchParams] = useSearchParams()
  const queryCode = searchParams.get('code')

  useEffect(() => {
    if (queryCode) {
      logUser(queryCode)

      const meetingSDK = document.getElementById('meetingSDK')
      const meetingSDKChat = document.getElementById('meetingSDKChat')
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
                width: width * 0.5,
                height: width * 0.5 * 0.6,
              },
              ribbon: {
                width: 300,
                height: 700,
              },
            },
            // meetingInfo: [
            //   'topic',
            //   'host',
            //   'mn',
            //   'pwd',
            //   'telPwd',
            //   'invite',
            //   'participant',
            //   'dc',
            //   'enctype',
            // ],
            // toolbar: {
            //   buttons: [
            //     {
            //       text: 'Custom Button',
            //       className: 'CustomButton',
            //       onClick: () => {
            //         console.log('custom button')
            //       },
            //     },
            //   ],
            // },
          },
          chat: {
            popper: {
              disableDraggable: true,
              anchorElement: meetingSDKChat,
              placement: 'top',
            },
          },
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryCode])

  return (
    <ZoomSDKStyle>
      <div className="column">
        <Text textAlign="center">Videos Here</Text>
        <div id="meetingSDK"></div>
      </div>
      <div className="column">
        <Text textAlign="center">Chat Here</Text>
        <div id="meetingSDKChat"></div>
      </div>
    </ZoomSDKStyle>
  )
}
