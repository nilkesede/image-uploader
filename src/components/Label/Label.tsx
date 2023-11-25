import styled from 'styled-components'

const P = styled.p`
  margin: 0;
  font-size: 0.8rem;
  text-align: center;
`

export default function Label({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return <P {...props}>{children}</P>
}
