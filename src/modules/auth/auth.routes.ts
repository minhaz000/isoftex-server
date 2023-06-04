import express from 'express'
import * as Controller from './auth.controller'
const router = express.Router()

router.get('/', Controller.index)
router.get('/login', Controller.read)
export default router
