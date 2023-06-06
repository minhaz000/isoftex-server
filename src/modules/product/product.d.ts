import { Strategy as PassportStrategy } from 'passport-strategy'
import express = require('express')

export interface IUser {
  username: string
  email: string
  password: string
}

interface IStrategyOptions {
  usernameField?: string | undefined
  passwordField?: string | undefined
  session?: boolean | undefined
  passReqToCallback?: false | undefined
}

interface IStrategyOptionsWithRequest {
  usernameField?: string | undefined
  passwordField?: string | undefined
  session?: boolean | undefined
  passReqToCallback: true
}

interface IVerifyOptions {
  message: string
}

interface VerifyFunctionWithRequest {
  (
    req: express.Request,
    username: string,
    password: string,
    done: (
      error: any,
      user?: Express.User | false,
      options?: IVerifyOptions
    ) => void
  ): void
}

interface VerifyFunction {
  (
    username: string,
    password: string,
    done: (
      error: any,
      user?: Express.User | false,
      options?: IVerifyOptions
    ) => void
  ): void
}

declare class Strategy extends PassportStrategy {
  constructor(
    options: IStrategyOptionsWithRequest,
    verify: VerifyFunctionWithRequest
  )
  constructor(options: IStrategyOptions, verify: VerifyFunction)
  constructor(verify: VerifyFunction)

  name: string
}
