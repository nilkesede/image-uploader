import useLogic from './logic'

export default function Upload() {
  const { uploadImage, image, url } = useLogic()

  return (
    <>
      <p data-testid="input-label">Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadImage}
        type="file"
        accept="image/png, image/jpeg"
      />
      {image && <p>{image}</p>}
      {url && (
        <p>
          <img src={url} alt="uploaded" width="500" />
        </p>
      )}
    </>
  )
}
