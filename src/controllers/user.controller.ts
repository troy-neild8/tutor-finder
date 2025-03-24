import { Request, Response } from "express"
import { db } from "../database"
import { sql } from "kysely"

export default class UsersController {
  // TODO(tneild): use zod to validate the request body, and then insert into the database
  async create(req: Request, res: Response) {
    try {
      res.status(201).json({
        message: "create OK",
        reqBody: req.body,
      })
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      })
    }
  }

  async findAll() {
    return db
      .selectFrom("person")
      .select([
        "id",
        sql<string>`concat(first_name, ' ', last_name)`.as("full_name"),
        "email",
      ])
      .execute()
  }

  async findOne(id: number) {
    return db
      .selectFrom("person")
      .select([
        "id",
        sql<string>`concat(first_name, ' ', last_name)`.as("full_name"),
        "email",
      ])
      .where("person.id", "=", id)
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
    return db
      .deleteFrom("person")
      .where("person.id", "=", id)
      .executeTakeFirst()
  }
}
