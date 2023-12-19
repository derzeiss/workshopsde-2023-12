import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.urlencoded());

app.get("/form", (req, res) => {
  console.log("get", req.body);
  res.sendFile(path.join(__dirname, "../routes/form.html"));
});

app.post("/form", (req, res) => {
  console.log("post", req.body);
  res.sendFile(path.join(__dirname, "../routes/form.html"));
  if (req.body.email == "mail" && req.body.password === "pw")
    res.redirect("/home");
});

app.get("/home", (_, res) => {
  const file = fs
    .readFileSync(path.join(__dirname, "../routes/home.html"))
    .toString();

  res.send(file.replace("{{data}}", Math.random() + ""));
});

app.listen(3001, () => {
  console.log("Listening on port:3001");
});
