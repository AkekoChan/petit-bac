import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const users = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "John",
    age: 30,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Jane",
    age: 25,
  },
];

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
