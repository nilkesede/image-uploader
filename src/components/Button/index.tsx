import styled from 'styled-components'

const Btn = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`

export default function Button() {
  return (
    <>
      <Btn>button</Btn>
    </>
  )
}

export { Button }
