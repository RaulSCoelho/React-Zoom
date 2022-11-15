import React, { useContext } from 'react'

import { Flex } from 'components/Flex'
import { ZoomSDK } from 'components/ZoomSDK'
import { ZoomContext } from 'context/ZoomContext'

export const Zoom: React.FC = () => {
  const { zakToken, startMeeting } = useContext(ZoomContext)
  const connectZoomUrl = `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_ZOOM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_ZOOM_REDIRECT_URL}`

  return (
    <Flex justifyContent="start">
      <Flex
        justifyContent="center"
        alignItems="start"
        direction="row"
        height="auto"
      >
        <a
          href={connectZoomUrl}
          style={{ textDecoration: 'none', color: 'unset' }}
        >
          Connect Zoom
        </a>
        {zakToken && (
          <button
            style={{ cursor: 'pointer' }}
            onClick={() =>
              startMeeting('75721314605', 'RaulSCoelho', 'q14gHM', zakToken)
            }
          >
            Start Meeting
          </button>
        )}
      </Flex>
      <ZoomSDK />
    </Flex>
  )
}
