export interface ZoomToken {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
  scope: string
}

export interface ZoomUser {
  id: string
  first_name: string
  last_name: string
  email: string
  type: number
  role_name: string
  pmi: number
  use_pmi: boolean
  personal_meeting_url: string
  timezone: string
  verified: number
  dept: string
  created_at: string
  last_login_time: string
  last_client_version: string
  pic_url: string
  cms_user_id: string
  jid: string
  group_ids: object
  im_group_ids: object
  account_id: string
  language: string
  phone_country: string
  phone_number: string
  status: string
  job_title: string
  location: string
  login_types: object
  role_id: string
  account_number: number
  cluster: string
  user_created_at: string
}

export interface GetUserResponse {
  token: ZoomToken
  zakToken: string
  user: ZoomUser
}
