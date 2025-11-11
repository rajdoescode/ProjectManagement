import express from "express";
import cors from "cors";

const app = express();

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//Basic Configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//Import Routers
import healthCheckRouter from "./routes/healthCheck.route.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
