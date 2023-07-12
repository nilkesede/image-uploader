import { ChangeEvent, useState } from 'react'

export default function useLogic() {
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    setImage('')
    setUrl('')

    const file = e.target.files ? e.target.files[0] : ''
    const body = new FormData()
    body.append('file', file)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    })

    if (response.ok) {
      const { data } = await response.json()
      setImage('success')
      setUrl(data)
    } else {
      setImage('error')
    }
  }

  return {
    uploadImage,
    image,
    url
  }
}
