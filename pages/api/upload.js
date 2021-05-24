import { promisify } from 'util'
import AWS from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION
})

const upload = promisify(
  multer({
    storage: multerS3({
      s3: new AWS.S3(),
      bucket: process.env.BUCKET_NAME,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: (_, __, cb) => cb(null, Date.now().toString())
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
