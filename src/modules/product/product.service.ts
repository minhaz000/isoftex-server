import { Request } from 'express'
import { rootModel } from '../root/root.model'
import apq from 'api-query-params'

export const getCategoryByFilter = async (req: Request) => {
  const query = apq(req.query, { projectionKey: 'select' })
  const data = await rootModel.Category.find(query.filter).select(query.projection)
  return data
}

export const createCategory = async (req: Request) => {
  const data = await rootModel.User.create(req.body)
  return data
}

export const readSingleCategory = async (req: Request) => {
  const data = await rootModel.User.create(req.body)
  return data
}

export const updateCategory = async (req: Request) => {
  const data = await rootModel.User.create(req.body)
  return data
}

export const deleteCategory = async (req: Request) => {
  const data = await rootModel.User.create(req.body)
  return data
}
