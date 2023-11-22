import { MouseEventHandler } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  color: ${({ theme }) => theme.colors.inverse};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition-duration: 0.1s;
  &:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`

export default function Button({
  label,
  onClick
}: {
  label: String
  onClick: MouseEventHandler
}) {
  return (
    <Btn data-testid="button" onClick={onClick}>
      {label}
    </Btn>
  )
}
