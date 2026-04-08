require("dotenv").config(); // ⚠️ Must be FIRST — before any other require that reads process.env

const express = require("express");
const cors = require("cors");
const contactRouters = require("./Router/contactroute");
const userRouters = require("./Router/userRoute");
const orderRouters = require("./Router/orderroute");
const event = require("./Router/event");
const payments = require("./Router/pay");
const createcontact = require("./db");
const helmet = require("helmet");
createcontact();

const app = express();
const Port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(helmet());

// Routes
app.use("/api", event);
app.use("/", contactRouters);
app.use("/", userRouters);
app.use("/", orderRouters);   // Order booking route
app.use("/pay", payments);    // Razorpay payment route

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

// Start server
app.listen(Port, () => console.log(`Server running on port ${Port}`));
