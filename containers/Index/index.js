import React from 'react'

import useLogic from './useLogic'

export default function Upload() {
  const { uploadPhoto, response, url } = useLogic()
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
