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

// Allowed origins: local dev + Vercel production frontend
const allowedOrigins = [
  "http://localhost:3000",
  process.env.CLIENT_URL,           // e.g. https://event-management-xyz.vercel.app
].filter(Boolean);

// Middleware
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
}));
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

// Start server only when run directly (not in Vercel serverless)
if (require.main === module) {
  app.listen(Port, () => console.log(`Server running on port ${Port}`));
}

// Export for Vercel serverless
module.exports = app;
