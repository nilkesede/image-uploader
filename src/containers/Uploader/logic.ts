import { useState } from 'react'
import { useRouter } from 'next/router'

export default function useLogic() {
  const [status, setStatus] = useState('')
  const router = useRouter()

  const uploadImage = async (files: FileList | null) => {
    setStatus('')

    const file = files ? files[0] : ''
    if (!file) return

    const body = new FormData()
    body.append('file', file)

    setStatus('loading')
    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    })

    if (response.ok) {
      const { data } = await response.json()
      const id = data.split('/').pop()
      router.push(`/view/${id}`)
    } else {
      setStatus('error')
    }
  }

  return {
    uploadImage,
    status
  }
}
