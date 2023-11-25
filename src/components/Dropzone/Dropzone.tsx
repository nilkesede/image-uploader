export default function Dropzone({
  onDrop,
  children
}: {
  onDrop: Function
  children: React.ReactNode
}) {
  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
  }
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    onDrop(e.dataTransfer.files)
  }
  return (
    <div
      onDragEnter={e => handleDragEnter(e)}
      onDragOver={e => handleDragOver(e)}
      onDragLeave={e => handleDragLeave(e)}
      onDrop={e => handleDrop(e)}
    >
      {children}
    </div>
  )
}
