import express from 'express'
import * as Controller from './category.controller'
const router = express.Router()

router.get('/categories', Controller.index)
router.post('/category', Controller.create)

router.get('/category/:ID', Controller.read)
router.put('/category/:ID', Controller.upadate)
router.delete('/category/:ID', Controller.eliminate)
export default router
