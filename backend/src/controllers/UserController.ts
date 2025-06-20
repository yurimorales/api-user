import { Request, Response } from "express";
import { User } from "../models/User";
import { openDb } from "../../db";

const userController = {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user: User = { name, email };
    try {
      const db = await openDb();
      const result = await db.run(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [user.name, user.email]
      );
      const createdUser = { id: result.lastID, name, email };
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating user" });
    }
  },

  async getUsers(req: Request, res: Response) {
    try {
      const db = await openDb();
      const users = await db.all("SELECT * FROM users");
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving users" });
    }
  },
};

export default userController;
