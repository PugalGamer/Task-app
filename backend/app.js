require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("DATABASE CONNECTED"));

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

// Define user model
const User = mongoose.model("Users", userSchema);

// API endpoint for user registration
app.post("/api/users/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error during registration" });
  }
});

// API endpoint for user login
app.post("/api/users/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      // User not found or incorrect password
      console.error(`Failed login attempt for username: ${username}`);
      return res
        .status(401)
        .json({ error: "Invalid username or password please try again." });
    }

    // Valid credentials, generate a token, and send success response
    const userddetails = user.username;
    // const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    // res.json({ token });
    res.json({ userddetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error during login" });
  }
});

// Other routes and functionalities...
const PORT = 3003; // Use a different port, for example, 3003
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
