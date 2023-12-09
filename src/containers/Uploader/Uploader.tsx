import { useRef } from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Title from '../../components/Title'
import Label from '../../components/Label'
import Dropzone from '../../components/Dropzone'
import useLogic from './logic'
import Loading from '../../components/Loading'

const LeftTitle = styled(Title)`
  text-align: center;
`

const StyledLoading = styled(Loading)`
  width: 350px;
`

export default function Uploader() {
  const { status, uploadImage } = useLogic()
  const inputFile = useRef<HTMLInputElement | null>(null)
  const onButtonClick = () => {
    inputFile.current && inputFile.current.click()
  }

  if (status === 'loading') {
    return (
      <Card>
        <LeftTitle>Uploading...</LeftTitle>
        <br />
        <StyledLoading label="Uploading..." />
      </Card>
    )
  }

  return (
    <Card>
      <Title>Upload your image</Title>
      <br />
      <Label data-testid="input-label">File should be Jpeg, Png...</Label>
      <br />
      <Dropzone onDrop={uploadImage} />
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
