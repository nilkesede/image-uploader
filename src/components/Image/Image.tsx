import NextImage from 'next/image'
import styled from 'styled-components'

interface ImageProps {
  src?: string
  alt?: string
  withLabel?: boolean
  noRadius?: boolean
}

const Wrapper = styled.div`
  width: 338px;
  min-height: 218px;
  border-radius: 12px;
  background-color: #f6f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2397BEF4FF' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`

const StyledImage = styled(NextImage)<ImageProps>`
  border-radius: ${({ noRadius }) => (noRadius ? '0' : '12px')};
  height: auto;
  margin-top: ${({ withLabel }) => (withLabel ? '-40px' : '0')};
`

export default function Image(props: ImageProps) {
  if (!props.src) {
    return (
      <Wrapper>
        <StyledImage
          {...props}
          noRadius
          src="/image.svg"
          width="115"
          height="89"
          alt="Image placeholder"
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <StyledImage {...props} width="338" height="255" />
    </Wrapper>
  )
}
