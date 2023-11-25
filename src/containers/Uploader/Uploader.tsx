import { useRef } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Title from '../../components/Title'
import Label from '../../components/Label'
import Image from '../../components/Image'
import Dropzone from '../../components/Dropzone'
import useLogic from './logic'

export default function Uploader() {
  const { uploadImage, url } = useLogic()
  const inputFile = useRef<HTMLInputElement | null>(null)
  const onButtonClick = () => {
    inputFile.current && inputFile.current.click()
  }

  return (
    <Card>
      <Title>Upload your image</Title>
      <br />
      <Label data-testid="input-label">File should be Jpeg, Png...</Label>
      <br />
      <Dropzone onDrop={uploadImage}>
        <Image src={url} alt="Image placeholder" />
      </Dropzone>
      <br />
      <Label>Or</Label>
      <br />
      <center>
        <Button label="Chose a file" onClick={onButtonClick} />
        <input
          onChange={e => uploadImage(e.target.files)}
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none' }}
          ref={inputFile}
        />
      </center>
    </Card>
  )
}
