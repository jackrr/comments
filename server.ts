import express from "express";
const app = express();
const port = 3001;

app.get("/comments", (req, res) => {
  res.send(JSON.stringify(["a comment", "another comment"]));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
