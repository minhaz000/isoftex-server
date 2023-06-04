import mongoose from 'mongoose'
import { userSchema } from '../auth/auth.schema'

export const rootModel: any = {}
export const initModels = (DataBase: string) => {
  console.log(DataBase)
  rootModel.User = mongoose.connection.useDb(DataBase).model('user', userSchema)
}
