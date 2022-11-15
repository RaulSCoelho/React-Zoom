export interface FetchProps {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  url: string
  payload?: Object
  includeCredentials?: boolean
  token?: string
}

export interface FetchNoPayload {
  url: string
  includeCredentials?: boolean
  token?: string
}

export interface FetchWithPayload {
  url: string
  payload: Object
  includeCredentials?: boolean
  token?: string
}
