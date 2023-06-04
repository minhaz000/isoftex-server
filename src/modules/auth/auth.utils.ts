import passport from 'passport'
import jwt from 'jsonwebtoken'
import * as passportLocal from 'passport-local'
import CustomStrategy from 'passport-custom'
// const GoogleStrategy = require('passport-google-oauth20').Strategy
import bcrypt from 'bcrypt'
import { rootModel } from '../root/root.model'
const saltRounds = 10

//========================== SING IN =========================
// passport.use(
//   new passportLocal.Strategy(function (username, password, done) {

//     }
//   )
// )
export const localStrategy = new passportLocal.Strategy(async function (
  username,
  password,
  done
) {
  const user = await rootModel.User.findOne({
    $or: [{ username: username }, { email: username }],
  })

  console.log(user)

  if (!user) {
    return done(
      {
        status: 403,
        message: { username: 'not found', type: 'user not found' },
      },
      false
    )
  }

  return done(null, user)
})

// =============================== TOKEN  VERIFICATION AND LOGIN STRATEGY  ================================
// passport.use(
//   'verify-token',
//   new CustomStrategy(function (req, done) {
//     const user = jwt.verify(req.params.Token, process.env.TOKEN_SECRET)
//     const update = { verified: true }
//     req.body.password
//       ? (update.password = bcrypt.hashSync(
//           req.body.password + process.env.SALT_SECRET,
//           saltRounds
//         ))
//       : null
//     User.findOneAndUpdate(
//       { _id: user._id },
//       update,
//       { returnOriginal: false },
//       async (err, user) => {
//         if (err) {
//           return done(err)
//         }
//         done(null, user)
//         delete req.session['unauthorized']
//       }
//     )
//   })
// )

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: 'http://localhost:5000/auth/google',
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user)
//       })
//     }
//   )
// )

// used to serialize the user for the session
passport.serializeUser(function (user: any, done) {
  done(null, user._id)
  // where is this user.id going? Are we supposed to access this anywhere?
})

// used to deserialize the user
passport.deserializeUser(async function (id, done) {
  const user = rootModel.User.findById(id)
  done(null, user)
})
