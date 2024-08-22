// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const Product = require("../../../server/models/Product"); // Aquí importas el nuevo modelo Product

const app = express();

// Conexion o llamada a MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/adduser", async (req, res) => {
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
    console.log(err);

    res.json({ message: "Something unexpected has occurred: " + err });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const products = await Product.find(); // Usando el modelo Product para obtener los productos
    res.json(products);
  } catch (err) {
    console.log(err);
    console.trace("location: /app/products");
    res.json({ message: "Server error: " + err });
  }
});

// Endpoint para obtener un usuario por su ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    res.json({ message: "Server error: " + err });
  }
});

// Endpoint para actualizar un usuario por su ID
app.put("/api/users/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
      },
      { new: true } // Devuelve el documento actualizado
    );

    if (!product) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: "User updated successfully", product });
  } catch (err) {
    console.log(err);
    res.json({ message: "Server error: " + err });
  }
});

// Endpoint para eliminar un usuario por su ID
app.delete("/api/users/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "User not found" });
      console.log(err);
    }

    res.json({ success: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Server error: " + err });
  }
});

app.listen(3001, () => {
  console.log("Servidor iniciado en puerto 3001");
});
