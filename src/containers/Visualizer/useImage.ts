export default function useImage(id) {
  const AWS_BUCKET = process.env.NEXT_PUBLIC_APP_AWS_BUCKET
  const AWS_REGION = process.env.NEXT_PUBLIC_APP_AWS_REGION

  const url = `https://${AWS_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${id}`

  return {
    url
  }
}
