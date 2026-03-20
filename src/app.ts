import express from 'express'
import type { Application, Request, Response } from 'express'

const app: Application = express()
const routes = express.Router()

routes.use('/', (req: Request, res: Response) => {
    res.send('Server is Running.. 🚀')
})

app.use('/api/v1', routes)

export default app
