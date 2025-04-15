import express, { Application, Request, Response, NextFunction } from "express"
import cors, { CorsOptions } from "cors"
import Routes from "./routes"

export default class Server {
  constructor(app: Application) {
    this.config(app)
    new Routes(app)
    this.errorHandling(app)
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "*", // Allow all origins
    }

    // Enable CORS for incoming requests
    app.use(cors(corsOptions))

    // Middleware to parse JSON bodies from incoming requests
    app.use(express.json())

    // Middleware to parse URL-encoded bodies, extended syntax enabled
    app.use(express.urlencoded({ extended: true }))
  }

  private errorHandling(app: Application): void {
    // Fallback 404 middleware: Handles requests that don't match any route.
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({ error: "Not found" })
    })

    // Global error-handling middleware: Catches and responds to any errors.
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.error("Error:", err)
      res.status(500).json({ error: "Internal Server Error" })
    })
  }
}
