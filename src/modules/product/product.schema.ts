import { Schema } from 'mongoose'
import { IUser } from './auth'
import uniqueValidator from 'mongoose-unique-validator'

const collectionSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
  },
  { versionKey: false }
)

collectionSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' })
export const userSchema = collectionSchema
