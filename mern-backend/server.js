const app = require("express")();
const products = require("./data/products");
const PORT = 5000;
const baseUrl = `http://localhost:${PORT}`;

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/api/products", (req, res) => {
  const query = req.query;

  if (Object.keys(query).length === 0) return res.json(products);

  const product = products.find((p) => p._id === query.id);

  res.json(product);
});

app.listen(PORT, () => console.log(`Running on ${baseUrl}`));
