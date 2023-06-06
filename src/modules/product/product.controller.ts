import * as Service from './product.service'
import { NextFunction, Request, Response } from 'express'
import { IResult } from '../../global/global'

const result: IResult = {
  status: 'success',
  message: '',
}
// ====================== GET CATEGORIES BY FILTER
export const index = async (req: Request, res: Response, next: NextFunction) => {
  // prettier-ignore
  try {
    result.data = await Service.getCategoryByFilter(req)
    result.message = 'get categories by filter'
    res.send(result)
  } 
  catch (error) {next(error)}
}
// ====================== CREATE CATEGORY
export const create = async (req: Request, res: Response, next: NextFunction) => {
  // prettier-ignore
  try {
    result.data = await Service.createCategory(req)
    result.message = 'create a new category'
    res.send(result)
  } 
  catch (error) {next(error)}
}
// ====================== GET SINGLE CATEGORY
export const read = async (req: Request, res: Response, next: NextFunction) => {
  // prettier-ignore
  try {
    result.data = await Service.readSingleCategory(req)
    result.message = 'get single category  by _id'
    res.send(result)
  } 
  catch (error) {next(error)}
}
// ====================== UPDATE CATEGORY BY _ID
export const upadate = async (req: Request, res: Response, next: NextFunction) => {
  // prettier-ignore
  try {
    result.data = await Service.updateCategory(req)
    result.message = 'update  category  by _id'
    res.send(result)
  } 
  catch (error) {next(error)}
}
// ====================== DELETE CATEGORY BY _ID
export const eliminate = async (req: Request, res: Response, next: NextFunction) => {
  // prettier-ignore
  try {
    result.data = await Service.deleteCategory(req)
    result.message = 'delete  category  by _id'
    res.send(result)
  } 
  catch (error) {next(error)}
}
