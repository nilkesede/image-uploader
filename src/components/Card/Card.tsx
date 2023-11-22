import styled from 'styled-components'

const Wrapper = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  padding: 40px 30px;
  border-radius: 12px;
`

export default function Card({ children }: { children: React.ReactNode }) {
  return <Wrapper data-testid="card-wrapper">{children}</Wrapper>
}
