import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { initModels } from '../modules/root/root.model'
export const initConnection = () => {
  const url = 'mongodb://localhost:27017/test'
  mongoose
    .connect(url)
    .then(() => console.log('database  connection '))
    .catch(err => {
      console.log(err)
    })
}
export const ConnectDB = (req: Request, res: Response, next: NextFunction) => {
  let DataBase: any = ''
  if (req.headers.origin) {
    DataBase = req.headers.origin?.split('//')[1].split('.')[0]
  } else {
    DataBase = req.headers.host?.split('.')[0]
  }
  console.log(DataBase)
  initModels('isoftex')
  next()
}
