import * as Service from './auth.service'
import { NextFunction, Request, Response } from 'express'
import { IResult } from '../../global/global'

const result: IResult = {
  status: 'success',
  message: '',
}
export const index = async (req: Request, res: Response) => {
  // const data = Service.getRootData()
  res.send('upadate is code fro sessions strict  ')
}
export const create = async (req: Request, res: Response, next: NextFunction) => {
  // prettier-ignore
  try {
    result.data = await Service.createUser(req)
    result.message = 'resiter as a new user'
    res.send(result)
  } 
  catch (error) {next(error)}
}
export const read = async (req: Request, res: Response) => {
  res.send('ressult')
}
