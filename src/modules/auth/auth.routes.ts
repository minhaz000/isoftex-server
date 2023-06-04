import express from 'express'
import * as Controller from './auth.controller'
import passport from 'passport'
const router = express.Router()

router.get('/', Controller.index)
router.get('/login', passport.authenticate('local'), Controller.read)
export default router
