import { Request } from 'express'
import { rootModel } from '../root/root.model'
import apq from 'api-query-params'

export const getCategoryByFilter = async (req: Request) => {
  const query = apq(req.query, { projectionKey: 'select' })
  const Aggrigate = rootModel.Category.aggregate([{ $match: {} }])
  const data = await Aggrigate
  return data
}

export const createCategory = async (req: Request) => {
  const data = await rootModel.Category.update(
    { _id: req.body.parentID },
    { $push: { $sub_cate: req.body } },
    { upsert: true }
  )
  return data
}

export const readSingleCategory = async (req: Request) => {
  const data = await rootModel.Category.create(req.body)
  return data
}

export const updateCategory = async (req: Request) => {
  const data = await rootModel.Category.create(req.body)
  return data
}

export const deleteCategory = async (req: Request) => {
  const data = await rootModel.Category.create(req.body)
  return data
}
