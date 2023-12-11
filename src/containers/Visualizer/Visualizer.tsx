import { useRouter } from 'next/router'
import NextImage from 'next/image'
import styled from 'styled-components'

import Card from '../../components/Card'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Button from '../../components/Button'
import useImage from './useImage'

const StyledCard = styled(Card)`
  text-align: center;
`

const StyledTitle = styled(Title)`
  margin: 10px 0 25px 0;
`

const StyledButton = styled(Button)`
  font-size: 0.7rem;
`

const LinkWrapper = styled.div`
  box-sizing: border-box;
  width: 338px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 2px;
  padding-left: 10px;
  margin-top: 15px;
  font-size: 0.7rem;
  background-color: ${({ theme }) => theme.colors.backgroundMuted};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const copyLink = url => {
  navigator.clipboard.writeText(url)
}

export default function Visualizer() {
  const router = useRouter()
  const { id } = router.query
  const { url } = useImage(id)

  return (
    <StyledCard>
      <NextImage
        src="/check_circle.svg"
        alt="Uploaded Successfully!"
        width="42"
        height="42"
      />
      <StyledTitle>Uploaded Successfully!</StyledTitle>
      <Image src={url} alt="Image uploaded" />
      <LinkWrapper>
        {url.slice(0, 37)}...
        <StyledButton onClick={() => copyLink(url)} label="Copy Link" />
      </LinkWrapper>
    </StyledCard>
  )
}
