import express, { Application } from "express";
import userRoutes from "./src/routes/userRoutes";
import { initDb } from "./db";

const app: Application = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", userRoutes);

const port = process.env.PORT || 3001;
initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing database:", error);
    process.exit(1);
  });
