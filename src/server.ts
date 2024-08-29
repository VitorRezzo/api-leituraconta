import express, { Request, Response } from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor ok");
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor Rodando http://${HOST}:${PORT}/`);
});
