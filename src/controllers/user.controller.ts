import { Request, Response } from "express"
import { db } from "../database"
import { sql } from "kysely"
import { z } from "zod"
import { create } from "domain"
import { CreateUser } from "../types/user"

export default class UsersController {
  async create(payload: CreateUser) {
    await db.insertInto("user").values(payload).executeTakeFirst()
  }

  async findAll() {
    return db
      .selectFrom("user")
      .select([
        "id",
        sql<string>`concat(first_name, ' ', last_name)`.as("full_name"),
        "email",
      ])
      .execute()
  }

  async findOne(id: number) {
    return db
      .selectFrom("user")
      .select([
        "id",
        sql<string>`concat(first_name, ' ', last_name)`.as("full_name"),
        "email",
      ])
      .where("user.id", "=", id)
      .executeTakeFirst()
  }

  // TODO(tneild): use zod to validate the request body, and then update the database
  async update(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "update OK",
        reqParamId: req.params.id,
        reqBody: req.body,
      })
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      })
    }
  }

  async delete(id: number) {
    return db.deleteFrom("user").where("user.id", "=", id).executeTakeFirst()
  }
}
