export default function useImage(id) {
  const url = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${id}`

  return {
    url
  }
}
