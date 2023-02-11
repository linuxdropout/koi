import { Request, RequestHandler } from 'express'

const handleAsync = (
  asyncMethod: (req: Request) => Promise<any>,
): RequestHandler => async (req, res, next) => {
  try {
    const result = await asyncMethod(req)

    return res
      .status(200)
      .json(result)
      .end()
  } catch (error: any) {
    return next(error)
  }
}

export default handleAsync
