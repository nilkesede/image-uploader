import { useState } from 'react'
import styled from 'styled-components'

import Image from '../Image'
import Label from '../Label'

const StyledLabel = styled(Label)`
  margin-top: -90px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.muted};
`

export default function Dropzone({ onDrop }: { onDrop: Function }) {
  const [dragStatus, setDragStatus] = useState('none')

  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    setDragStatus('enter')
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
    setDragStatus('none')
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
  }
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    setDragStatus('none')
    onDrop(e.dataTransfer.files)
  }
  return (
    <div
      onDragEnter={e => handleDragEnter(e)}
      onDragOver={e => handleDragOver(e)}
      onDragLeave={e => handleDragLeave(e)}
      onDrop={e => handleDrop(e)}
    >
      <Image withLabel={true} />
      <br />
      <br />
      <StyledLabel>Drag & Drop your image here</StyledLabel>
    </div>
  )
}
