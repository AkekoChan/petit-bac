import express, { Express, Request, Response } from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import { Game } from "./game";

const app: Express = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
