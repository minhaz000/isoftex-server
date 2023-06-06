import { NextFunction, Request, Response } from 'express'

// ================ Error 404 Not Found Error =================
export const error404 = (req: Request, res: Response) => {
  const error = {
    status: 'Not Found',
    message: 'URL not found.Please enter a valid URL',
  }
  res.status(404).send(error)
}

// ============== Generic error Handler =================
export const error = (
  error: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const result: any = { status: 'failed' }
  console.log(error)
  if (error.errors) {
    console.log(error.errors)
    error.status = 406
    result.message = error._message
    result.type = error.name
    result.errors = {}
    for (const key in error.errors) {
      result['errors'][`${key}`] = {
        type: error.errors[key].kind,
        message: error.errors[key]['message'],
      }
    }
  } else {
    error.message
      ? (result.message = error.message)
      : (result.message = 'There was an Internal Server Error')
  }
  res.status(error.status || 500).send(result)
}
