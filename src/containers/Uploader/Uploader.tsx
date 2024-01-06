import { useRef } from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Title from '../../components/Title'
import Label from '../../components/Label'
import Dropzone from '../../components/Dropzone'
import Alert from '../../components/Alert'

import useLogic from './logic'
import Loading from '../../components/Loading'

const StyledLoading = styled(Loading)`
  width: 350px;
`

const StyledAlert = styled(Alert)`
  margin-top: -10px;
  margin-bottom: 15px;
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
        <Title>Uploading...</Title>
        <br />
        <StyledLoading label="Uploading..." />
      </Card>
    )
  }

  return (
    <Card>
      {status === 'error' && <StyledAlert>Something went wrong</StyledAlert>}

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
