import { Schema } from 'mongoose'
import { IUser } from './auth'
import uniqueValidator from 'mongoose-unique-validator'

const collectionSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
)

collectionSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' })
export const userSchema = collectionSchema
