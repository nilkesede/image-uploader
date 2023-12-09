import styled from 'styled-components'

const H1 = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 500;
`

export default function Title({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return <H1 {...props}>{children}</H1>
}
