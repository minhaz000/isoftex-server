import * as Service from './auth.service'
import { Request, Response } from 'express'
import { rootModel } from '../root/root.model'

export const index = async (req: Request, res: Response) => {
  // const data = Service.getRootData()
  res.send('upadate is code fro sessions strict  ')
}
export const read = (req: Request, res: Response) => {
  // const ressult = rootModel.User.find({})
  res.send('ressult')
}
