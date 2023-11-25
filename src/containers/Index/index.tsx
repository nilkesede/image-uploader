import { useRef } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import Image from 'next/image'

import { defaultTheme, darkTheme } from '../../styles/theme'
import Button from '../../components/Button'
import Card from '../../components/Card'
import useLogic from './logic'

export default function Index() {
  const { uploadImage, image, url } = useLogic()
  const inputFile = useRef<HTMLInputElement | null>(null)
  const [, setTheme] = useLocalStorage('theme', defaultTheme)
  const onButtonClick = () => {
    inputFile.current && inputFile.current.click()
  }

  return (
    <Card>
      <h1>Upload your image</h1>
      <p data-testid="input-label">File should be Jpeg, Png,...</p>
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
          <Image src={url} alt="uploaded" width="500" />
        </p>
      )}
      <p>
        <button onClick={() => setTheme(defaultTheme)}>Default Theme</button>
        <button onClick={() => setTheme(darkTheme)}>Dark Theme</button>
      </p>
    </Card>
  )
}
