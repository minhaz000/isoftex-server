import { Request } from 'express'
import { rootModel } from '../root/root.model'

export const createUser = async (req: Request) => {
  const data = await rootModel.User.create(req.body)
  return data
}
