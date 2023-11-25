import { useState } from 'react'

export default function useLogic() {
  const [status, setStatus] = useState('')
  const [url, setUrl] = useState('')

  const uploadImage = async (files: FileList | null) => {
    setStatus('')
    setUrl('')

    const file = files ? files[0] : ''
    if (!file) return

    const body = new FormData()
    body.append('file', file)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    })

    if (response.ok) {
      const { data } = await response.json()
      setStatus('success')
      setUrl(data)
    } else {
      setStatus('error')
    }
  }

  return {
    uploadImage,
    status,
    url
  }
}
