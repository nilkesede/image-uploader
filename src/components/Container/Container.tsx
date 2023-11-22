import styled from 'styled-components'
import Card from '../Card'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  )
}
