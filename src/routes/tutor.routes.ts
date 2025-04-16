import { Router } from "express"
import TutorController from "../controllers/tutor.controller"
import { createTutorSchema } from "../types/tutor"
import { z } from "zod"

class TutorRoutes {
  public router = Router()
  private controller: TutorController

  constructor() {
    this.controller = new TutorController()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get("/", async (req, res) => {
      try {
        const tutors = await this.controller.findAll()
        res.status(200).json(tutors)
      } catch (err) {
        res.status(500).json({ message: "Internal Server Error!" })
      }
    })
    this.router.post("/", async (req, res) => {
      try {
        const validatedData = createTutorSchema.parse(req.body)
        this.controller.create(validatedData)
        res.status(201).json({
          message: "create OK",
          tutor: validatedData,
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
  }
}

export default new TutorRoutes().router
