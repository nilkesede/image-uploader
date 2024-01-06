import styled from 'styled-components'

const StyledAlert = styled.div`
  color: #58151c;
  background-color: #2f8d7da;
  border: 1px solid #f1aeb5;
  border-radius: 8px;
  padding: 10px;
`

export default function Alert({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return <StyledAlert {...props}>{children}</StyledAlert>
}
