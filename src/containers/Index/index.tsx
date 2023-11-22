import { useRef } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import useLogic from './logic'
import Button from '../../components/Button'
import { defaultTheme, darkTheme } from '../../styles/theme'

export default function Index() {
  const { uploadImage, image, url } = useLogic()
  const inputFile = useRef<HTMLInputElement | null>(null)
  const [, setTheme] = useLocalStorage('theme', defaultTheme)
  const onButtonClick = () => {
    inputFile.current && inputFile.current.click()
  }

  return (
    <>
      <p data-testid="input-label">Upload a .png or .jpg image (max 1MB).</p>
      <Button label="Chose a file" onClick={onButtonClick} />
      <input
        onChange={uploadImage}
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: 'none' }}
        ref={inputFile}
      />
      {image && <p>{image}</p>}
      {url && (
        <p>
          <img src={url} alt="uploaded" width="500" />
        </p>
      )}
      <p>
        <button onClick={() => setTheme(defaultTheme)}>Default Theme</button>
        <button onClick={() => setTheme(darkTheme)}>Dark Theme</button>
      </p>
    </>
  )
}
