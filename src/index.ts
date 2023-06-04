import app from './app'
import { initConnection } from './middlewares/db.congfig'

const port: number = process.env.PORT || 3000
initConnection()
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
