const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
  throw new Error("JWT_SECRET missing in env");
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone must be 10 digits"],
    },

    role: {
      type: String,
      enum: ["user", "vendor", "admin"],
      default: "user",
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    tokens: [{ token: { type: String } }],
  },
  { timestamps: true }
);

// ───────── Generate JWT ─────────
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign(
    { id: this._id, role: this.role },
    SECRET_KEY,
    { expiresIn: "1d" }
  );

  // Keep only last 3 tokens
  this.tokens = this.tokens.slice(-2);
  this.tokens.push({ token });

  await this.save();
  return token;
};

module.exports = mongoose.model("User", userSchema);
