/* eslint-disable no-await-in-loop */
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

async function main() {
  const port = process.env.PORT
  if (!port) throw new Error('process.env.PORT is not defined')

  const app = express()

  app.get('/_health', (_req, res) => {
    res
      .status(200)
      .json({ ok: true })
      .end()
  })

  app.use(
    cors({
      optionsSuccessStatus: 202,
      credentials: true,
      origin: process.env.DISABLE_CORS ? (_origin, next) => next(null, true) : (origin, next) => {
        if (process.env.NODE_ENV === 'development') {
          return next(null, true)
        }

        if (origin?.endsWith('koi.com')) {
          return next(null, true)
        }
      },
    }),
  )
  app.use(express.json({ limit: '500mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use(cookieParser())

  return new Promise(
    resolve => {
      app.listen(port, () => {
        console.log(`App listening on port: ${port}`)
        resolve(app)
      })
    },
  )
}

export default main

if (require.main === module) main()
