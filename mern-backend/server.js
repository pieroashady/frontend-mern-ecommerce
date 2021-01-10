import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import Connect from "./connection/Connect.js";
import products from "./data/products.js";
const PORT = process.env.PORT || 5000;
const baseUrl = `http://localhost:${PORT}`;

dotenv.config();
Connect.Db();
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/api/products", (req, res) => {
  const query = req.query;

  if (Object.keys(query).length === 0) return res.json(products);

  const product = products.find((p) => p._id === query.id);

  res.json(product);
});

app.listen(PORT, () => console.log(`Running on ${baseUrl}`.yellow.bold));
