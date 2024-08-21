// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const Product = require("./models/Product"); // Aquí importas el nuevo modelo Product

const app = express();

// Conectar a MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);

app.post("/api/addProduct", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,
    });

    await newProduct.save();
    res.json({ success: "New Product added successfully" });
  } catch (err) {
    res.json({ message: "Something unexpected has occurred: " + err });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); // Usando el modelo Product para obtener los productos
    res.json(products);
  } catch (err) {
    res.json({ message: "Server error: " + err });
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
