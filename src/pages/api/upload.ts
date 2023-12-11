import { promisify } from 'util'
import { S3Client } from '@aws-sdk/client-s3'
import multer from 'multer'
import multerS3 from 'multer-s3'
import { v4 as uuid } from 'uuid'

const {
  APP_AWS_ACCESS_KEY: AWS_ACCESS_KEY,
  APP_AWS_SECRET_KEY: AWS_SECRET_KEY,
  NEXT_PUBLIC_APP_AWS_REGION: AWS_REGION,
  NEXT_PUBLIC_APP_AWS_BUCKET: AWS_BUCKET
} = process.env

const s3Client = new S3Client({
  credentials: {
    accessKeyId: `${AWS_ACCESS_KEY}`,
    secretAccessKey: `${AWS_SECRET_KEY}`
  },
  region: AWS_REGION
})

const upload = promisify(
  multer({
    storage: multerS3({
      s3: s3Client,
      bucket: `${AWS_BUCKET}`,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: (_, __, cb) => cb(null, uuid())
    })
  }).single('file')
)

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
  try {
    await upload(req, res)
    return res.status(200).send({
      data: req.file.location
    })
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}
