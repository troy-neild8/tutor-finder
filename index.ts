const express = require('express')
const app = express()

const port = 3000
const knex = require('knex')
const config =
  require('./knexfile')[process.env.DATABASE_PROFILE || 'development']
const database = knex(config)

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
