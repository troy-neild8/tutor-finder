import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { DB } from './db/db'

export const dialect = new PostgresDialect({
  pool: new Pool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT)
      : 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    max: 10,
  }),
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
  dialect,
})
