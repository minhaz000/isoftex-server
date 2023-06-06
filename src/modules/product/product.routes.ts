import express from 'express'
import * as Controller from './product.controller'
const router = express.Router()

router.get('/products', Controller.index)
router.post('/product', Controller.create)

router.get('/product/:ID', Controller.read)
router.put('/product/:ID', Controller.upadate)
router.delete('/product/:ID', Controller.eliminate)
export default router
