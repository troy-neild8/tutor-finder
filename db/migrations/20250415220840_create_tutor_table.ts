import { Kysely, sql } from "kysely"

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("tutor")
    .addColumn("user_id", "integer")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addForeignKeyConstraint("user_fk", ["user_id"], "public.user", ["id"])
    .addUniqueConstraint("user_fk_unique", ["user_id"])
    .execute()

  await db.schema
    .createTable("subject")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("name", "varchar")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute()

  await db.schema
    .createTable("tutor_subject_through")
    .addColumn("tutor_user_id", "integer")
    .addColumn("subject_id", "integer")
    .addColumn("year_experience_started", "integer")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addForeignKeyConstraint("subject_fk", ["subject_id"], "public.subject", [
      "id",
    ])
    .addForeignKeyConstraint(
      "tutor_user_fk",
      ["tutor_user_id"],
      "public.tutor",
      ["user_id"]
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("tutor_subject_through").execute()
  await db.schema.dropTable("subject").execute()
  await db.schema.dropTable("tutor").execute()
}
