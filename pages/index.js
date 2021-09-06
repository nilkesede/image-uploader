import { useState } from 'react'

export default function Upload() {
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

  return (
    <>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
      {response && <p>{response}</p>}
      {url && (
        <p>
          <img src={url} alt="uploaded" width="500" />
        </p>
      )}
    </>
  )
}
