import express from 'express'
import 'dotenv/config.js'
import { connectToOracleDB } from './apps/cotizaciones/data-access/database.js'
import apiRoutes from './apps/cotizaciones/entry-points/api/routes.js'

const app = express()
const PORT = process.env.PORT || 3008

connectToOracleDB()

app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT} ⚡`)
})
