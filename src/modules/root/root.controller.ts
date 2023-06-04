import * as Service from './root.service'
import { Request, Response } from "express"

export const  index = async (req:Request , res:Response) =>{
    // const data = Service.getRootData()
    res.send(" wellcome to isoftex server ")
}
export const read = (req:Request , res:Response) =>{
    req.session.veiw ? req.session.veiw ++ : req.session.veiw = 1
    const view = req.session.veiw 
   
    res.send(`you visited this page ${view}`)
}