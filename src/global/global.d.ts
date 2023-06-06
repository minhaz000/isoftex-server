/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    PORT: number
    DATABASE_URL: string
    TOKEN_SECRET: string
  }
}
export interface IResult {
  status: 'success' | 'failed'
  message: string
  data?: any
  error?: any
}
