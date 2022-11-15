const router = require('express').Router()
const fetch = require('node-fetch')
const KJUR = require('jsrsasign')

async function getToken(code) {
  const b = Buffer.from(
    `${process.env.REACT_APP_ZOOM_CLIENT_ID}:${process.env.REACT_APP_ZOOM_CLIENT_SECRET}`
  )

  const zoomRes = await fetch(
    `https://zoom.us/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REACT_APP_ZOOM_REDIRECT_URL}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${b.toString('base64')}`,
      },
    }
  )

  const zoomData = await zoomRes.json()

  return zoomData
}

async function getZakToken(access_token) {
  const zoomRes = await fetch(
    'https://api.zoom.us/v2/users/me/token?type=zak',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  const zoomData = await zoomRes.json()

  return zoomData
}

router.post('/user', async (req, res) => {
  const token = await getToken(req.body.code)
  const zakToken = await getZakToken(token.access_token)

  const zoomUserRes = await fetch('https://api.zoom.us/v2/users/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  })

  const zoomUserData = await zoomUserRes.json()

  return res.send({ token, zakToken: zakToken.token, user: zoomUserData })
})

router.post('/sdk-signature', async (req, res) => {
  const iat = Math.round((new Date().getTime() - 30000) / 1000)
  const exp = iat + 60 * 60 * 2
  const oHeader = { alg: 'HS256', typ: 'JWT' }

  const oPayload = {
    sdkKey: req.body.sdkKey,
    mn: req.body.meetingNumber,
    role: req.body.role,
    iat: iat,
    exp: exp,
    appKey: req.body.sdkKey,
    tokenExp: iat + 60 * 60 * 2,
  }

  const sHeader = JSON.stringify(oHeader)
  const sPayload = JSON.stringify(oPayload)
  const sdkJWT = KJUR.jws.JWS.sign(
    'HS256',
    sHeader,
    sPayload,
    req.body.sdkSecret
  )
  return res.send({ sdkSignature: sdkJWT })
})

module.exports = router
