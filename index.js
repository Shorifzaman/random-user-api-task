import express from "express";
import http from "http";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Random User API");
});

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server listenig on port: ", PORT);
});
