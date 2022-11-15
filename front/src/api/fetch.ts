import { FetchNoPayload, FetchProps, FetchWithPayload } from 'interfaces/fetch'

const fetchData = async <T>(props: FetchProps): Promise<T> => {
  if (!props.method) props.method = 'GET'
  if (props.includeCredentials === undefined) props.includeCredentials = true

  const options: globalThis.RequestInit = {
    method: props.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (props.includeCredentials) {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    options.mode = 'cors'
    options.redirect = 'follow'
    options.referrerPolicy = 'origin'
    options.credentials = 'include'
  }

  if (props.payload) options.body = JSON.stringify(props.payload)

  if (props.token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${props.token}`,
    }
  }

  return await fetch(props.url, options)
    .then(res => res.json())
    .then(data => data)
}

const GET = async <T>(props: FetchNoPayload): Promise<T> => {
  const fetchProps: FetchProps = {
    url: props.url,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData(fetchProps)
}

const POST = async <T>(props: FetchWithPayload): Promise<T> => {
  const fetchProps: FetchProps = {
    method: 'POST',
    url: props.url,
    payload: props.payload,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData<T>(fetchProps)
}

const PUT = async <T>(props: FetchWithPayload): Promise<T> => {
  const fetchProps: FetchProps = {
    method: 'PUT',
    url: props.url,
    payload: props.payload,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData<T>(fetchProps)
}

const PATCH = async <T>(props: FetchWithPayload): Promise<T> => {
  const fetchProps: FetchProps = {
    method: 'POST',
    url: props.url,
    payload: props.payload,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData(fetchProps)
}

const DELETE = async <T>(props: FetchNoPayload): Promise<T> => {
  const fetchProps: FetchProps = {
    method: 'DELETE',
    url: props.url,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData(fetchProps)
}

export const FETCH = {
  get: GET,
  post: POST,
  put: PUT,
  patch: PATCH,
  delete: DELETE,
}
