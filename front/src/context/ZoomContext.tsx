import React, { createContext, useCallback, useState } from 'react'

import ZoomMtgEmbedded, { EmbeddedClient } from '@zoomus/websdk/embedded'
import { FETCH } from 'api/fetch'
import { GetUserResponse, ZoomToken, ZoomUser } from 'interfaces/zoom'

interface ZoomContextType {
  client: typeof EmbeddedClient
  token: ZoomToken
  zakToken: string
  user: ZoomUser
  logUser: (code: string) => void
  startMeeting: (meetingNumber, userName, password, zak) => void
}

export const ZoomContext = createContext<ZoomContextType>(null)

interface Props {
  children?: React.ReactNode
}

export const ZoomProvider: React.FC<Props> = ({ children }) => {
  const sdkKey = process.env.REACT_APP_ZOOM_SDK_KEY
  const sdkSecret = process.env.REACT_APP_ZOOM_SDK_SECRET
  const [token, setToken] = useState<ZoomToken>()
  const [zakToken, setZakToken] = useState('')
  const [user, setUser] = useState<ZoomUser>()
  const client = ZoomMtgEmbedded.createClient()

  const startMeeting = useCallback(
    (meetingNumber, userName, password, zak) => {
      FETCH.post<any>({
        url: 'http://localhost:3001/zoom/sdk-signature',
        payload: {
          sdkKey,
          sdkSecret,
          meetingNumber,
          role: '1',
        },
        includeCredentials: false,
      }).then(res => {
        client.join({
          sdkKey,
          signature: res.sdkSignature,
          meetingNumber,
          password,
          userName,
          zak,
        })
      })
    },
    [client, sdkKey, sdkSecret]
  )

  const logUser = useCallback((code: string) => {
    FETCH.post<GetUserResponse>({
      url: 'http://localhost:3001/zoom/user',
      payload: { code },
      includeCredentials: false,
    }).then(res => {
      setToken(res.token)
      setZakToken(res.zakToken)
      setUser(res.user)
    })
  }, [])

  return (
    <ZoomContext.Provider
      value={{
        client,
        token,
        zakToken,
        user,
        logUser,
        startMeeting,
      }}
    >
      {children}
    </ZoomContext.Provider>
  )
}
