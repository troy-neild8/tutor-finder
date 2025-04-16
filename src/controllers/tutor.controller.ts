import { Request, Response } from "express"
import { db } from "../database"
import { sql } from "kysely"
import { z } from "zod"
import { create } from "domain"
import { CreateTutor } from "../types/tutor"

export default class TutorController {
  async create(payload: CreateTutor) {
    await db.insertInto("tutor").values(payload).executeTakeFirst()
  }

  async findAll() {
    return db.selectFrom("tutor").selectAll().execute()
  }

  async findOne(id: number) {
    return db
      .selectFrom("tutor")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirst()
  }

  async update(id: number, payload: UpdateTutor) {
    await db
      .updateTable("tutor")
      .set(payload)
      .where("id", "=", id)
      .executeTakeFirst()
  }

  async delete(id: number) {
    await db.deleteFrom("tutor").where("id", "=", id).executeTakeFirst()
  }
}
