import nodeMocks from 'node-mocks-http'

import upload from '../../../src/pages/api/upload'

jest.mock('multer', () => {
  return () => ({
    single(_) {
      return (req, res, next) => {
        req.file = {
          location: 'filename.jpg'
        }
        next()
      }
    }
  })
})

describe('API function', () => {
  const req = nodeMocks.createRequest()
  const res = nodeMocks.createResponse()

  beforeEach(() => {
    res.send = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('sends data with session key on successful call', async () => {
    await upload(req, res)

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send).toHaveBeenCalledWith({ data: 'filename.jpg' })
  })
})
