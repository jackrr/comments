import express from "express";
import cors from "cors";
import { db } from "@/db";

const app = express();
const port = 3001;

app.use(cors());

app.get("/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  const post = await db.post.findFirst({
    where: { slug: slug },
  });

  res.send(post);
});

app.get("/comments", (req, res) => {
  res.send(["a comment", "another comment"]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
