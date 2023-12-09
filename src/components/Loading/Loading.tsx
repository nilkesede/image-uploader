import styled, { keyframes } from 'styled-components'

const greenglow = keyframes`
    from {
        left:-50%;
    }
    to {
        left:100%;
    }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundMuted};
  margin: 5px;
  &:after {
    content: ' ';
    display: block;
    width: 50%;
    height: 6px;
    border-radius: 8px;
    position: absolute;
    animation: ${greenglow} 1s linear infinite;
    z-index: 2;
    background: ${({ theme }) => theme.colors.primary};
  }
`

export default function Loading({ label, ...props }: { label: string }) {
  return <ProgressBar {...props} aria-label={label} />
}
