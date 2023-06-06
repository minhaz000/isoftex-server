import mongoose from 'mongoose'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { ObjectId } = mongoose.Types
export interface ICategory {
  name: string
  description: string
  slug: string
  icon: string
  imgURL: string
  parentID: ObjectId
}
