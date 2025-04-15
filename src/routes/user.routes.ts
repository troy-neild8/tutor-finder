import { Router } from "express"
import UsersController from "../controllers/user.controller"
import { createUserSchema } from "../types/user"
import { z } from "zod"

class UsersRoutes {
  public router = Router()
  private controller: UsersController

  constructor() {
    this.controller = new UsersController()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get("/", async (req, res) => {
      try {
        const people = await this.controller.findAll()
        res.status(200).json(people)
      } catch (err) {
        res.status(500).json({ message: "Internal Server Error!" })
      }
    })

    this.router.get("/:id", async (req, res) => {
      try {
        const user = await this.controller.findOne(Number(req.params.id))
        res.status(200).json(user)
      } catch (err) {
        res.status(500).json({ message: "Internal Server Error!" })
      }
    })

    this.router.post("/", async (req, res) => {
      try {
        const validatedData = createUserSchema.parse(req.body)
        this.controller.create(validatedData)
        res.status(201).json({
          message: "create OK",
          user: validatedData,
        })
      } catch (err) {
        if (err instanceof z.ZodError) {
          res.status(400).json({
            message: "Validation Error",
            errors: err.errors,
          })
        } else {
          res.status(500).json({
            message: "Internal Server Error!",
          })
        }
      }
    })

    this.router.put("/:id", async (req, res) => {
      await this.controller.update(req, res)
    })

    this.router.delete("/:id", async (req, res) => {
      try {
        await this.controller.delete(Number(req.params.id))
        res.status(204).json({ message: "delete OK" })
      } catch (err) {
        res.status(500).json({ message: "Internal Server Error!" })
      }
    })
  }
}

export default new UsersRoutes().router
