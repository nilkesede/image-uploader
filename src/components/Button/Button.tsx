import { MouseEventHandler } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  color: ${({ theme }) => theme.colors.inverse};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
`

export default function Button({
  label,
  onClick
}: {
  label: String
  onClick: MouseEventHandler
}) {
  return <Btn onClick={onClick}>{label}</Btn>
}
