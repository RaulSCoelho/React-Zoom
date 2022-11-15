import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Text } from 'components/Text'
import { ZoomContext } from 'context/ZoomContext'

import { ZoomSDKStyle } from './styles'

export const ZoomSDK: React.FC = () => {
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
    </ZoomSDKStyle>
  )
}
