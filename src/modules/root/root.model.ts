import mongoose from 'mongoose'
import { userSchema } from '../auth/auth.schema'
import { categorySchema } from '../category/category.schema'

export const rootModel: any = {}
export const initModels = (DataBase: string) => {
  console.log(DataBase)
  rootModel.User = mongoose.connection.useDb(DataBase).model('user', userSchema)
  rootModel.Category = mongoose.connection.useDb(DataBase).model('category', categorySchema)
  // rootModel.Product = mongoose.connection.useDb(DataBase).model('product', userSchema)
}
