// const express = require("express");
// const app = express();
// const port = 8080;
// const cors = require("cors");

// app.use(cors());

// app.get("/api/products", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//index.js
// const express = require('express')
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bycrypt = require('bcrypt'); //npm install bcrypt
// const db = require('./db');

// const app = express()

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//       origin: 'http://localhost:3000',
//       credentials: true
// }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post("/api/adduser", async (req, res) => {
//   const sql ="INSERT INTO users (name,email,username,password) VALUES (?, ?, ?, ?)";

//   const hashedPassword =  await bycrypt.hash(req.body.password, 10);

//   const values = [req.body.name, req.body.email, req.body.username, hashedPassword];
//   db.query(sql, values, (err, result) => {
//     if (err)
//       return res.json({ message: "Something unexpected has occured" + err });
//     return res.json({ success: "New User added successfully" });
//   });
// });

// app.get("/api/users", (req, res) => {
//   const sql = "SELECT * FROM users";
//   db.query(sql, (err, result) => {
//     if (err) res.json({ message: "Server error" });
//     return res.json(result);
//   });
// });

// app.get("/api/getuser/:id", (req, res) => {
//   const id = req.params.id;
//   const sql = "SELECT * FROM users WHERE id= ?";
//   db.query(sql, [id], (err, result) => {
//     if (err) res.json({ message: "Server error" });
//     return res.json(result);
//   });
// });

// app.put("/api/edit/:id", async (req, res) => {
//   const id = req.params.id;
//   const sql ="UPDATE users SET name=?, email=?, username=? WHERE id=?";

//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.username,
//     id,
//   ];
//   db.query(sql, values, (err, result) => {
//     if (err)
//       return res.json({ message: "Something unexpected has occured" + err });
//     return res.json({ success: "User updated successfully" });
//   });
// });

// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;
//   const sql = "DELETE FROM users WHERE id=?";
//   const values = [id];
//   db.query(sql, values, (err, result) => {
//     if (err)
//       return res.json({ message: "Something unexpected has occured" + err });
//     return res.json({ success: "Student successfully Deleted" });
//   });
// });

// app.listen(3001, () => {console.log('Server started on port 3001')});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt"); // npm install bcrypt
const connectDB = require("./db");
const User = require("./models/User");

const app = express();

// Conectar a MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "http://localhost:3000/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/adduser", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ success: "New User added successfully" });
  } catch (err) {
    res.json({ message: "Something unexpected has occurred: " + err });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: "Server error: " + err });
  }
});

app.get("/api/getuser/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ message: "Server error: " + err });
  }
});

app.put("/api/edit/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
      },
      { new: true }
    );

    res.json({ success: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.json({ message: "Something unexpected has occurred: " + err });
  }
});

app.delete("/api/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: "User successfully Deleted" });
  } catch (err) {
    res.json({ message: "Something unexpected has occurred: " + err });
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
