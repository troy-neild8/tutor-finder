import { Router } from "express"
import UsersController from "../controllers/user.controller"

class UsersRoutes {
  router = Router()
  controller = new UsersController()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    // Retrieve all Userss
    this.router.get("/", async (req, res) => {
      try {
        const people = await this.controller.findAll()
        res.status(200).json(people)
      } catch (err) {
        res.status(500).json({
          message: "Internal Server Error!",
        })
      }
    })

    // Retrieve a single Users with id
    this.router.get("/:id", async (req, res) => {
      try {
        const people = await this.controller.findOne(Number(req.params.id))
        res.status(200).json(people)
      } catch (err) {
        res.status(500).json({
          message: "Internal Server Error!",
        })
      }
    })

    // Create a new Users
    this.router.post("/", this.controller.create)

    // Update a Users with id
    this.router.put("/:id", this.controller.update)

    // Delete a Users with id
    this.router.delete("/:id", (req, res) => {
      try {
        this.controller.delete(Number(req.params.id))
        res.status(204).json({
          message: "delete OK",
        })
      } catch (err) {
        res.status(500).json({
          message: "Internal Server Error!",
        })
      }
    })
  }
}

export default new UsersRoutes().router
