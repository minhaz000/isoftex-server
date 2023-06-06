import { Schema } from 'mongoose'
import { ICategory } from './category'
import uniqueValidator from 'mongoose-unique-validator'
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types
const collectionSchema = new Schema<ICategory>(
  {
    name: { type: String, required: [true, 'please provide  {PATH} '] },
    slug: { type: String, required: [true, 'please provide  {PATH} '], unique: true },
    description: { type: String },
    icon: String,
    imgURL: String,
    parentID: { type: ObjectId, default: null },
  },
  { versionKey: false }
)

collectionSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' })
export const categorySchema = collectionSchema
