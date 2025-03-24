import type { Kysely } from "kysely"
import { DB } from "../../src/db/db"

export async function seed(db: Kysely<DB>): Promise<void> {
  await db
    .insertInto("person")
    .values([
      {
        first_name: "Ford",
        last_name: "Neild",
        email: "hanfordn35@gmail.com",
      },
      {
        first_name: "Troy",
        last_name: "Neild",
        email: "etn2008@gmail.com",
      },
    ])
    .execute()
}
