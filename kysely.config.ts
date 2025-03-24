import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl'
import { dialect } from './src/database'

export default defineConfig({
  // replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
  dialect,
  migrations: {
    migrationFolder: 'db/migrations',
    getMigrationPrefix: getKnexTimestampPrefix,
  },
  plugins: [],
  seeds: {
    seedFolder: 'db/seeds',
  },
})
