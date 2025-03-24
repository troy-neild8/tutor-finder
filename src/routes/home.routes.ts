import { Router } from 'express'

class HomeRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', (_req, res) => {
      res.json({ message: "Welcome to Troy's application." })
    })
  }
}

export default new HomeRoutes().router
