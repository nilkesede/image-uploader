import { useState } from 'react'

export default function useLogic(Component) {
  const [response, setResponse] = useState('')
  const [url, setUrl] = useState('')

  const uploadPhoto = async e => {
    setResponse('')
    setUrl('')

    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)

    const resp = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (resp.ok) {
      const { data } = await resp.json()
      setResponse('success')
      setUrl(data)
    } else {
      setResponse('error')
    }
  }

  return {
    uploadPhoto,
    response,
    url
  }
}
